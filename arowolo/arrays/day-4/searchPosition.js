var searchInsert = function(nums, target) {
    function binarySearch(start, end) {
        if (start > end) return start;
        const mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) return binarySearch(mid + 1, end);
        if (nums[mid] > target) return binarySearch(start, mid - 1);
    }
    return binarySearch(0, nums.length - 1);
};