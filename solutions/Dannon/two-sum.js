/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [2, 7, 11, 15];
const target = 9;
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let t = i + 1; t <= nums.length; t++) {
      if (nums[i] + nums[t] == target) {
        return [i, t];
      }
    }
  }
};
