import { showMessage } from "siyuan";
import { SY块 } from "@/class/思源/块";
import { EStoreKey } from "@/constant/系统码";
import { CardQueryService as 卡片类 } from "@/module/card/service/CardQueryService";

const 最新数据版本 = {
  卡片数据版本: 1.1,
};

export class 触发器 {
  private 加载: (key: EStoreKey) => Promise<any>;
  private 保存: (key: EStoreKey, value: any) => Promise<boolean>;

  constructor(
    加载: (key: EStoreKey) => Promise<any>,
    保存: (key: EStoreKey, value: any) => Promise<boolean>
  ) {
    this.加载 = 加载;
    this.保存 = 保存;

    this.数据处理();
  }

  async 数据处理() {
    const 存储数据 = (await this.加载(EStoreKey.数据版本)) || {};
    const { 卡片数据版本 } = 最新数据版本;

    let 卡片版本 = 存储数据.卡片版本;

    if (卡片版本 !== 卡片数据版本) {
      showMessage("数据版本不一致，正在进行数据升级", 20000, "info");

      const 所有卡片 = await 卡片类.getAll();

      await Promise.all(
        所有卡片.map((卡片) =>
          SY块.设置块属性({
            id: 卡片.ID,
            attrs: {
              "custom-plugin-lively-card": "",
              "custom-plugin-lively-card-description": "",
              "custom-plugin-lively-card-id": "",
              "custom-plugin-lively-card-parentId": "",
              "custom-plugin-lively-card-x": "",
              "custom-plugin-lively-card-y": "",
              "custom-plugin-lively-card-alias": "",
            },
          })
        )
      );

      卡片版本 = 卡片数据版本;
    }

    if (卡片版本 !== 存储数据.卡片版本) {
      const ok = await this.保存(EStoreKey.数据版本, {
        卡片版本,
      });
      if (!ok) {
        console.error("数据版本保存失败，下次启动将再次执行数据升级");
      }
    }
  }

  public 销毁() {}
}
