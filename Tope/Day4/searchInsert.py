class Solution:
    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        lens = len(nums)
        if(lens == 0): return 0

        for i,n in enumerate(nums):
            if(n >= target):
                return i

        return lens

input_list = [3,12,14,17]
ob1 = Solution()
print(ob1.searchInsert(input_list, 15))