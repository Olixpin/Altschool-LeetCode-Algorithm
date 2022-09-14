var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let y = 0; y < nums.length; y++) {
      if (nums[i] + nums[y] === target) {
        return [i, y];
      }
    }
  }
};
