var removeDuplicates = function (nums) {
  let uniqueCount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[uniqueCount] = nums[i];
      uniqueCount += 1;
    }
  }

  return uniqueCount;
};
