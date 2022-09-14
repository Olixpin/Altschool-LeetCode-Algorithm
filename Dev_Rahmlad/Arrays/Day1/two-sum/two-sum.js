/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i=0; i<=nums.length; i++){
        for(let j=i+1; j<=nums.length; j++){
            if(nums[i] < target && nums[j] < target){
                if (nums[i] + nums[j] == target) {
                    return [i, j];
                  }
            }
        }
    }
};
const arr = [1, 2, 6, 3];
console.log(twoSum(arr, 9));

