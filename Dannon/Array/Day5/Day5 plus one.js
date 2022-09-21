const digits = [1, 2, 3];
var plusOne = function (digits) {
  let num = +digits.join("") + 1;
  console.log(num);
  const myArr = String(num)
    .split("")
    .map((num) => {
      return Number(num);
    });
  return myArr;
};
