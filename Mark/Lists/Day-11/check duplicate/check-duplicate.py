class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        return False if len(nums)==len(set(nums)) else True

print(Solution().containsDuplicate([3,4,5]))
