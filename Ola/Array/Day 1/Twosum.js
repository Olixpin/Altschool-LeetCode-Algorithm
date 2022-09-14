//Solution
var nums = [2, 12, 19, 24, 32, 45, 56, 67, 78, 89, 90, 100];
var target = [133];

let sumOfNums = function(nums, target){
  for(let i = 0; i < nums.length; i++){
    for(let j = i +1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        return[i, j];
      }
    }
  }
}
console.log(sumOfNums(nums, 133));