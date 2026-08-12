import Kramdown助手 from "@/class/helper/Kramdown助手";
import { SY块 } from "@/class/思源/块";
import SY文档 from "@/class/思源/文档";

export async function 插入到日记(源ID: string, 笔记本ID: string) {
  const 日记文档ID = await SY文档.创建日记文档(笔记本ID);

  await SY块.插入前置子块({
    dataType: "markdown",
    data: Kramdown助手.生成嵌入块(源ID),
    parentID: 日记文档ID,
  });
}
