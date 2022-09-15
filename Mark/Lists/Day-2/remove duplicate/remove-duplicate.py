class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        for num in nums:
            if nums.count(num) > 1:
                nums.remove(num)
            else:
                continue
        return len(nums)
        

solution = Solution()
output = solution.removeDuplicates([1,1,1,2,2,3,3,4,5])
print(output)
