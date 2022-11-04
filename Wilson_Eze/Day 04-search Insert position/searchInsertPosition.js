/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] < target) {
      nums[j] = nums[j];
    }
    if (nums[j] > target) {
      return j;
    }
  }
  return nums.length;  
};