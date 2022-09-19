/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const nums = [3, 2, 2, 3];
let val = 3;
var removeElement = function (nums, val) {
  temp = nums[1];
  nums[1] = nums[0];
  nums[0] = temp;
  ord = nums[1];
  nums[1] = nums[2];
  nums[2] = ord;
  nums.splice(nums.length - 2, 2);
};
