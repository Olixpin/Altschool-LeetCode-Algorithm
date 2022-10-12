/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    const number = "" + (BigInt(digits.join("")) + 1n);
    const nums = number.split("")
    return nums.map(Number)
};