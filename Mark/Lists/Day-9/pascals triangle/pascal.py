class Solution:
    def generate(self, numRows: int) -> list[list[int]]:
        nums = [[1], [1,1]]

        if numRows == 1:
            return [[1]]
        elif numRows == 2:
            return [[1], [1,1]]
        else:
            for i in range(1, numRows - 1):
                new = list()
                for j in range(len(nums[i]) - 1):
                    n = nums[i]
                    m = n[j] + n[j + 1]
                    new.append(m)
                new.insert(0, 1)
                new.append(1)
                nums.append(new)

        return nums

solution = Solution()
output = solution.generate(4)
print(output)
