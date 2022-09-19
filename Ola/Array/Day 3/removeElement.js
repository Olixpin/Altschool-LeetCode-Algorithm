//Solution
let nums = [7, 9, 9, 7, 2]
let val = 7
function removeElement(nums, val) {

  for (let i=0; i<nums.length; i++){
  if(nums[i]===val){
      nums.splice(i,1);
      i--
    }
  }
  return nums.length;
};
console.log(removeElement(nums, val));