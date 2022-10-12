/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (
	nums,
	left = 0,
	right = nums.length - 1
) {
    /*
        create a base case to compare the left and the right of the array from
        a mid point. If the left is larger, we want to return nothing
        */
	if (left <= right) {
        
        /*
        we want to calculate what our mid point is and also create the tree root
        */
		let midPointIndex = Math.floor((left + right) / 2);
        
		let root = new TreeNode(nums[midPointIndex]);
		
        /*
        calculate what should be on the left and right side respectively
        */
        root.left = sortedArrayToBST(
			nums,
			left,
			midPointIndex - 1
		);
		
        root.right = sortedArrayToBST(
			nums,
			midPointIndex + 1,
			right
		);
		
        return root;
	}
	return null;
};
