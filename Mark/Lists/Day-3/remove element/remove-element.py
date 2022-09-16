
class Solution:
    def removeElement(self, nums: list[int], val: int) -> int:
        for num in list(nums):
            if num == val:
                nums.remove(num)
            else:
                continue
        
        print(nums)


solution = Solution()
output = solution.removeElement([0,1,2,2,3,0,4,2,2,2,2], 2)
print(output)
