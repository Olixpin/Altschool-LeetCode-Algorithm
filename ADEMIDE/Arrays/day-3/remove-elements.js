/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  let a = 0;
  for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== val) {
          nums[a] = nums[j];
          a++;
      }
  }
  return a;
};