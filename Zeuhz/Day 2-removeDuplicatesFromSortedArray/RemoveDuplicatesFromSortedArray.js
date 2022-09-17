const removeDuplicates = (nums) => {
  let count = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== nums[j + 1]) {
      nums[count++] = nums[j];
    }
  }
  return count;
};
