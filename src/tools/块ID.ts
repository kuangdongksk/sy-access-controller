import dayjs from "dayjs";

export function 生成块ID() {
  return `${dayjs().format("YYYYMMDDHHmmss")}-${生成随机字符(7)}`;
}

export function 生成随机字符(length: number): string {
  const letter = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += letter.charAt(Math.floor(Math.random() * letter.length));
  }
  return result;
}
