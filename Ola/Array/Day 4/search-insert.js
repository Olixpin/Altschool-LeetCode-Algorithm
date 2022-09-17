//Solution
var searchInsert = function(nums, target) {
  let left= 0;
  let right= nums.length;
  while (left <=right){
      const middle = Math.floor((left + right)/2)
      if (nums[middle]<target){
          left+=1
      }
      else{
        right -=1  
      }
  }
  return left
};
console.log(`The answer is ${searchInsert([1,3,5,6], 5)}`)