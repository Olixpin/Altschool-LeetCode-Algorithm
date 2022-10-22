/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    res = 0;
    for(let num of nums){
        res^=num
    }
    return res;
};