const productExceptSelf = (nums) => {
  let product = [],
    count = 1;

  for (let i = 0; i < nums.length; i++) {
    product[i] = count;
    count *= nums[i];
  }

  count = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    product[i] *= count;
    count *= nums[i];
  }

  return product;
};
