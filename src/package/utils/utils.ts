export const getPx: (num: number | string) => string = (num) => {
  return typeof num === "number" ? `${num}px` : num + "";
};

export const getType: (obj: unknown) => string = (obj: unknown) =>
  Object.prototype.toString
    .call(obj)
    .slice(1, -1)
    .split(" ")[1]
    .toLowerCase();

