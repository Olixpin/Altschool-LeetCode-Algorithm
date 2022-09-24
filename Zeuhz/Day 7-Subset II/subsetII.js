const subsetsWithDup = (nums) => {
  nums.sort();
  const set = [[]];
  let count, subSet, setLength;
  for (let i = 0; i < nums.length; i++) {
    count = 1;
    while (nums[i + 1] && nums[i + 1] == nums[i]) {
      count++;
      i++;
    }
    setLength = set.length;
    for (let j = 0; j < setLength; j++) {
      subSet = set[j].slice();
      for (let x = 1; x <= count; x++) {
        if (x > 0) subSet.push(nums[i]);
        set.push(subSet.slice());
      }
    }
  }
  return set;
};
