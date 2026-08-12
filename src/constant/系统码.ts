export const 自定义 = "custom";
export const 思源协议 = "siyuan://blocks/";
export const 思源插件协议 = "siyuan://plugins/sy-lively/";
export const 分隔符 = "$分$";

export const 喧嚣 = "lively";
export const C领域 = "domain";
export const C分类 = "category";
export const 属性前缀 = `${自定义}-plugin-${喧嚣}-`;

export enum EPluginPath {
  SYLively = "SYLively",
  EditWhiteBoard = "EditWhiteBoard",
}

export enum E块属性名称 {
  //
  名称 = "name",
  别名 = "alias",
  //
  用户设置 = `${属性前缀}userSettings`,
  领域设置 = `${属性前缀}${C领域}Settings`,
  分类设置 = `${属性前缀}${C分类}Settings`,
  领域 = `${属性前缀}${C领域}`,
  分类 = `${属性前缀}${C分类}`,
  日记前缀 = `${自定义}-dailynote-`,
  卡片 = `${属性前缀}card`,
}

const EVeil属性前缀 = `${属性前缀}veil-`;

export enum EVeil属性名称 {
  pwdHash = EVeil属性前缀 + "pwdHash",
}

const EWhiteBoard属性前缀 = `${属性前缀}whiteBoard-`;

export enum EWhiteBoard属性名称 {
  WhiteBoard = EWhiteBoard属性前缀 + "WhiteBoard",
}

export enum EStoreKey {
  用户设置 = "用户设置",
  currentVersion = "currentVersion.json",
  数据版本 = "数据版本",
  卡片文档ID = "卡片文档ID",
  上锁的笔记 = "上锁的笔记",
  WorkFlow = "WorkFlow",
}
