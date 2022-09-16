/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == val) continue;
        nums[k++] = nums[i]
    }
    return k;
};
const numbers =[0,1,2,2,3,0,4,2]
console.log(removeElement(numbers, 2));