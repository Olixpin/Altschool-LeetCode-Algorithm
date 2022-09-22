# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        def convert(left, right):
            if right == left:
                return TreeNode(nums[left])
            if right < left:
                return None
            
            middle = (right + left) // 2
            return TreeNode(val = nums[middle], left = convert(left, middle - 1), right = convert(middle + 1, right))
        
        return convert(0, len(nums) - 1)
    
    
Solution().sortedArrayToBST([1, 3])
