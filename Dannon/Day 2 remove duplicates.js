/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [1, 1, 2];
const expectedNums = [];
var removeDuplicates = function (nums) {
  temp = nums[2];
  nums[2] = nums[1];
  nums[1] = temp;
  nums.pop();
};
