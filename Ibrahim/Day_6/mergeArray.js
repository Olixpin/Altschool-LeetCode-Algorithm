/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

 var merge = function(nums1, m, nums2, n) {
    // splice to remove the zeros
    nums1.splice(m,n)
    // push array nuw2 to nums1 by using soread operator
    nums1.push(...nums2)
    // use sort method to sort the array in ascending order
    nums1.sort()

};