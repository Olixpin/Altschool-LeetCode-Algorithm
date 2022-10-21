var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  let subset = [];

  const backtrack = (index) => {
    result.push([...subset]);
    for (let i = index; i < nums.length; i++) {
      if (nums[i] === nums[i - 1] && i > index) continue;
      subset.push(nums[i]);
      backtrack(i + 1);
      subset.pop();
    }
  };
  backtrack(0);
  return result;
};

console.log(subsetsWithDup([1, 2, 2]));
