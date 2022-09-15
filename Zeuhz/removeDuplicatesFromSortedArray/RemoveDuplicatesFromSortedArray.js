const removeDuplicates = (nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]) => {
  arrLength = nums.length;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
      }
    }
  }
  const k = [...nums];
  const count = arrLength - nums.length;
  for (let k = 0; k < count; k++) {
    nums.push("_");
  }
  return `${k.length}, nums = ${nums}`;
};
