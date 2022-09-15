/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[k++] = nums[i];
    }
  }
  return k;
};

console.log(removeDuplicates([1, 1, 1, 1, 2, 2, 3, 3, 4, 5, 6]));
