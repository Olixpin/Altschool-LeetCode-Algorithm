var merge = function (nums1, m, nums2, n) {
    let count = 0;
    for (let i = 0; i > m && i < nums1.length; i++) {
      if (nums1[i] !== 0) {
        nums1[count++] = nums1[i];
      }
    }
    nums1.length = m;
    for (let j = 0; j < nums2.length; j++) {
      nums1.push(nums2[j]);
    }
    nums1.sort((a, b) => a - b);
    return nums1;
  };