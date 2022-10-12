var thirdMax = function(nums) {
    nums.sort((a,b) => b - a);
    
    let elemCounted = 1;
    let prevElem = nums[0];
    
    for (let index = 1; index < nums.length; ++index) {
        if (nums[index] != prevElem) {
            elemCounted += 1;
            prevElem = nums[index];
        }

        if (elemCounted == 3) {
            return nums[index];
        }
    }
    return nums[0];
    
};