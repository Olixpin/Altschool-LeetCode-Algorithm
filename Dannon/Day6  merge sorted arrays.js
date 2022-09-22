const nums1 = [1,2,3,0,0,0]
const nums2 = [2,5,6]
var merge = function(nums1, m, nums2, n) {    
nums1.splice(m, n, ...nums2)
    nums1.sort((a,b) => a - b);
};