
class Solution(object):
    def plusOne(self,digits):
        while digits[0]!=0:
            if 1<=len(digits)<=100:
                digit= [str(i) for i in digits]
                res= int("".join(digit))
                res=res+1
                s=[int(i) for i in str(res)]
                return s



solution=Solution()
lis=[3,5,8,9]
print(solution.plusOne(lis))
