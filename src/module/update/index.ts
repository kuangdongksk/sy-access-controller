import SYFile from "@/class/思源/file";
import { EStoreKey } from "@/constant/系统码";
import { Dialog } from "siyuan";

export default class UpdateNotice {
  private latestVersion: string = "0.2.7";

  private EUpdateType = {
    功能: "功能",
    优化: "优化",
    修复: "修复",
    移除: "移除",
  };

  async showUpdateNotice() {
    const data = await SYFile.getFile(EStoreKey.currentVersion);
    if (data.currentVersion === this.latestVersion) return;

    new Dialog({
      title: `更新公告：${this.latestVersion}`,
      content: `
      <div style="padding: 12px;">
        <h3>${this.EUpdateType.移除}</h3>
        <ul>
          <li>移除内置AI对话模块（思源笔记已内置AI功能）</li>
        </ul>
        <h3>${this.EUpdateType.优化}</h3>
        <ul>
          <li>规范插件版本号字段</li>
          <li>修复数据版本升级逻辑，避免每次启动重复提示</li>
        </ul>
      </div>
      `,
    });

    SYFile.putFile({
      path: EStoreKey.currentVersion,
      file: JSON.stringify({ currentVersion: this.latestVersion }),
      isDir: false,
    });
  }
}
