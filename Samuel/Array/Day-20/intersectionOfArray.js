var intersection = function(nums1, nums2) {
    
    var value = nums1.filter(x => nums2.includes(x)) 
    
    var remDuplicate  = [...new Set(value)]; 

    return remDuplicate ;
    
};