class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        n=len(digits)-1
        sum=0 
        for i in digits:
            sum+=i*10**n
            n-=1
        sum+=1
        return [int(x) for x in str(sum)]