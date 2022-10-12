var singleNumber = function(nums) {
    let singleNum = 0;

   for(let i = 0; i < nums.length; i++) {
       singleNum ^= nums[i];
   }

   return singleNum;
};