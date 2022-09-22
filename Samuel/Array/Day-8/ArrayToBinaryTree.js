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
 var sortedArrayToBST = function(nums) {
    
        
    if (nums.length === 1) return new TreeNode(nums[0]);
    if (nums.length === 0) return null;
    

    let centerIdx = Math.floor(nums.length/2);    
    let root = new TreeNode(nums[centerIdx]);
    
  
    let leftSubtree = nums.slice(0,centerIdx);
    root.left = sortedArrayToBST(leftSubtree);
    
    
    let rightSubtree = nums.slice(centerIdx+1,nums.length);
    root.right = sortedArrayToBST(rightSubtree);
      
    return root;
    
};