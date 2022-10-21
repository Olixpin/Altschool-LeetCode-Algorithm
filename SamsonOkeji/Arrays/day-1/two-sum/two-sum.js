/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (complement in hashMap) return [hashMap[complement], i];
    hashMap[nums[i]] = i;
  }
  return;
}

console.log(twoSum([3, 3], 6));
