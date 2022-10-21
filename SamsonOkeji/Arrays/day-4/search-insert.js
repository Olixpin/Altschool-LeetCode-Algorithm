/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num >= target) {
      index = i;
      break;
    }
    index = i + 1;
  }
  return index;
};

console.log(searchInsert([1, 2, 3, 4], 2));
