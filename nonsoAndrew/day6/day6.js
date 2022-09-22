/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;
var merge = function (nums1, m, nums2, n) {
	//m denotes the length of elements thats is needed in nums1
	//n denotes the length of elements not needed in nums2
	//using the splice method since index is always less than length by one
	//  we use the length (m) to denote the start index of splice which is +1 of the last index of element needed and n represents the number of elements not needed equivalent to no of elements to be removed by splice and a 3rd param denoting the items to be added using destructuring

	nums1.splice(m, n, ...nums2);
	return nums1.sort((a, b) => a - b);

	//USING WHILE LOOP TO ITERATE AND REPLACE


	let p = 0;

	while (n > 0) {
		nums1[m] = nums2[p];
		p++;
		m++;
		n--;
	}
	nums1.sort((a, b) => a - b);
};

merge(nums1, m, nums2, n);

console.log(nums1);
