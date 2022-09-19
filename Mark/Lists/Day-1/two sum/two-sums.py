class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        y = len(nums)
        for i in range(y):
            h = i+1
            f = nums[h:]
            for x in range(len(f)):
                if nums[i] + f[x] == target:
                    return [i, x+h]
            else:
                continue



                
solution = Solution()
nums = [3,2,2,3]
target = 6
print(solution.twoSum(nums, target))
