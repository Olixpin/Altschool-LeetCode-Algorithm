from itertools import combinations
from typing import List

class Solution:
    def subsetWithDup(self,nums:List[int])->List[List[int]]:
        sets=[]
        temp=[]
        for i in range(0,len(nums)+1):
            sets +=[list(x) for x in combinations(nums,i)]

        for subset in list(sets):
            subset=sorted(subset)
            if subset not in temp:
                temp.append(subset)
        return temp

sl=Solution()
sth=[1,2,2]

print(sl.subsetWithDup(sth)) 