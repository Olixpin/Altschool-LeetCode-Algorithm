class Solution:
    def plusOne(self, digits: list[int]) -> list[int]:
        num = []
        for digit in digits:
            num.append(str(digit))
        result = int(''.join(num))
        result = result + 1
        result_to_str = str(result)
        num.clear()
        
        for i in result_to_str:
            num.append(i)
        return num

        

solution = Solution()
output = solution.plusOne([9])
print(output)