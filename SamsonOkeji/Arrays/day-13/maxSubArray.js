/**
 * @param {number[]} nums
 * @return {number}
 */

 var maxSubArray = function(nums) {
  let sum = nums[0];
let maxSum = nums[0];
for(let i=1;i<nums.length;i++){
  sum = Math.max(sum+nums[i],nums[i]);
  maxSum = Math.max(maxSum,sum);
}
return maxSum;
};