class Solution:
    def searchInsert(self, nums: list[int], target: int) -> int:
        nums.sort()
        if target in nums:
            return nums.index(target)
        
        if target not in nums:
            for i in range(len(nums) - 1):
                if nums[i] < target and nums[i + 1] > target:
                    return i + 1
            if nums[len(nums) -1 ] < target:
                return len(nums)

            if nums[0] > target:
                return 0


solution = Solution()
output = solution.searchInsert([1,3,4,5,7], 8)
print(output)
