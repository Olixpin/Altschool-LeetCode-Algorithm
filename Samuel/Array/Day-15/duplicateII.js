var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const j = map.get(nums[i]);
      
      if (Math.abs(i - j) <= k) {
        return true;
      }
    }

    map.set(nums[i], i);
  }

  return false;
};