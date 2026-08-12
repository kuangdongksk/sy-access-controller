import SQLer from "@/class/helper/SQLer";
import { I增改查弹窗表单Ref } from "@/components/增改查弹窗表单";
import { I分类, I领域 } from "@/types/喧嚣/领域";
import { Tabs } from "antd";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import 分类表单 from "../../../业务组件/表单/分类表单";

const 所有 = "所有";

function 领域详情() {
  const 分类表单Ref = useRef<I增改查弹窗表单Ref>(null);
  const { state } = useLocation() as { state: I领域 };

  const [分类, 令分类为] = useState<I分类[]>([]);

  const [页签键, 令页签键为] = useState(所有);

  const 加载分类 = async () => {
    const data = await SQLer.获取指定领域下的分类(state.ID);
    令分类为(data);
  };

  useEffect(() => {
    加载分类();
  }, [state.ID]);

  return (
    <>
      <Tabs
        type="editable-card"
        activeKey={页签键}
        items={[
          {
            key: 所有,
            label: "所有",
            closable: false,
          },
          ...分类.map((item) => ({
            key: item.ID,
            label: item.名称,
            closable: false,
          })),
        ]}
        onChange={令页签键为}
        onEdit={(_event, action) => {
          if (action === "add") {
            分类表单Ref.current?.令表单状态为("添加");
          }
        }}
      />

      <分类表单 ref={分类表单Ref} 领域={state} 完成回调={加载分类} />
    </>
  );
}

export default 领域详情;
