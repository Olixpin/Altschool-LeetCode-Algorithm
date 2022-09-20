/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // let lastIndexPosition = [digits.length - 1];
  // if (digits[lastIndexPosition] < 9) {
  //   digits[lastIndexPosition] = digits[lastIndexPosition] + 1;
  // } else if (digits[lastIndexPosition] >= 9) {
  //   let digit = BigInt(digits.join("")) + 1n;
  //   return String(digit)
  //     .split("")
  //     .map((num) => Number(num));
  //   // return BigInt(digits.join("")) + 1n;
  return ("" + (BigInt(digits.join("")) + 1n)).split("");
  // const num = "" + (BigInt(digits.join("")) + 1n);
};

console.log(plusOne([2, 3]));
// BigInt(digits.join("")) + 1n;
