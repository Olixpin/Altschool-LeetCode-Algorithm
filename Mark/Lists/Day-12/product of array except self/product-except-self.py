class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        res = [1] * (len(nums))
        before = 1
        for i in range(len(nums)):
            res[i] = before
            before*=nums[i]
        after = 1
        for i in range(len(nums) -1, -1, -1):
            res[i] *= after
            after*=nums[i]
        return res


solution = Solution()
output = solution.productExceptSelf([-1,1,0,-3,3])
print(output)