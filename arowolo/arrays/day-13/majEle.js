/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let sum = 0;
    let max = nums[0];

    for (let i =0; i < nums.lenght; i++) {
        sum += nums[i];

        if(sum > max) max = sum;
        if (sum < 0) sum = 0
    }

    return max;
};