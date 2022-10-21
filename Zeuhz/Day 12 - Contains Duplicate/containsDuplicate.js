const containsDuplicate = (nums) => {
  return new Set(nums).size !== nums.length ? true : false;
};
