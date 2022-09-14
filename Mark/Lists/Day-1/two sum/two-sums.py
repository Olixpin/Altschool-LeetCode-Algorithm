class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        for i in range(len(nums)):
            j = i + 1
            if nums[i] + nums[j] == target:
                return [i, j]
                break
            else:
                continue



                
solution = Solution()
nums = [3,2,4]
target = 6
print(solution.twoSum(nums, target))
