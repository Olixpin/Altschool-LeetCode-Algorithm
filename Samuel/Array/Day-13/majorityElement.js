var majorityElement = function(nums) {
    
  let numsObj = {};
  let maxFreq = 0;
  let maxElement = null;for (let num of nums) {
    numsObj[num] = numsObj[num] + 1 || 1;
  }

  for (num in numsObj) {
    if (numsObj[num] > maxFreq) {
      maxFreq = numsObj[num];
      maxElement = parseInt(num);
    }
  }
  return maxElement;
    
};