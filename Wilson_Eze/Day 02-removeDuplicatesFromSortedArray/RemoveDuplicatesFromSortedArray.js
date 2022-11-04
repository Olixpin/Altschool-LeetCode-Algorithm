/**
 * @param {number[]} nums
 * @return {number}
 */
 var nums = [2, 24, 19, 24, 32, 45, 2, 88, 89, 88];

 var removeDuplicates = function(nums) {
   let sort = 0;
   for (let i = 0; i < nums.length; i++){
     if (nums[i] !== nums[i-1]){
       nums[sort] = nums[i];
       sort++;
      }
   }  
   return sort;
 };
 
 
