# from typing import List

# def plusOne(digits: List[int]) -> List[int]:
#         n = len(digits)
        
#         while n>0:
#             if digits[n-1]==9:
#                 if (n-1) == 0:
#                     digits[n-1] = 0
#                     temp = [1] + digits
#                     return temp
#                 else:
#                     digits[n-1] = 0
#                     n = n-1
#             else:
#                 digits[n-1] += 1
#                 return digits
        
#         return digits

class Solution:
    # @param digits, a list of integer digits
    # @return a list of integer digits
    def plusOne(self, digits):
        carry = 1
        for i in reversed(xrange(len(digits))):
            digits[i] += carry
            carry = digits[i] / 10
            digits[i] %= 10
        
        if carry:
            digits = [1] + digits
        
        return digits

if __name__ == "__main__":
    print(Solution().plusOne([9, 9, 9, 9]))