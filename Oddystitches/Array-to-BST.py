from typing import List

class Solution():
    def sortedArrayToBST(self,nums:List[int]) -> Optional[TreeNode]:
        if not nums:
            return None
        mid_num=len(nums)//2
        node=TreeNode(nums[mid_num])
        node.left=self.sortedArrayToBST(nums[:mid_num])
        node.right=self.sortedArrayToBST(nums[mid_num+1:])
        return node


bst= Solution()
nums=[-10,-3,0,5,9]
print(bst.sortedArrayToBST(nums))