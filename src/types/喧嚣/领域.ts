export interface I领域 {
  ID: string;
  笔记本ID: string;
  名称: string;
  描述: string;
  默认分类: string;
}
export interface I分类 {
  ID: string;
  领域ID: string;
  笔记本ID: string;
  名称: string;
  描述: string;
}

export interface I领域分类 extends I领域 {
  分类: I分类[];
}
