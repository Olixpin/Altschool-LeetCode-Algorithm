/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let j =0;
    for (let i =0; i< nums.length; i++){
        if(nums[i] == nums[i+1] )continue;
nums[j++]= nums[i]
    }
    return j;
};
const numbers = [0, 0, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(numbers))