var removeElement = function (nums, val) {
  let count = 0;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      count += 1;
      continue;
    }
    nums[j] = nums[i];
    j++;
  }
  return nums.length - count;
};
