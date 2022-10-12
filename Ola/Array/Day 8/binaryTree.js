var sortedArrayToBST = function(nums, left=0, right= nums.length-1) {
  if(left>right) return null;
  let mid= Math.floor((left+right)/2);
  let root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums,left,mid-1);
  root.right = sortedArrayToBST(nums,mid+1, right);
  return root; 
};
console.log(sortedArrayToBST[-10,-3,0,5,9])