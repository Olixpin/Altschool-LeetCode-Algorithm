
var removeDuplicates = function(nums) {
    const length = nums.length;

    if( length <= 1 ){
        return length;
    }

    let i = 0;

    for(let j = 1; j < length; j++){
        if( nums[i] != nums[j] ){
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
