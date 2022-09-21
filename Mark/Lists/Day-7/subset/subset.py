"""
Given an integer array nums that may contain duplicates, return all possible subsets 
(the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
"""

from itertools import combinations


class Solution:
    def subsetsWithDup(self, nums: list[int]) -> list[list[int]]:
        new_list = []
        final_list = []
        for i in range(len(nums) + 1):
            new_list += [list(j) for j in combinations(list(nums), i)]
        
        for each_list in list(new_list):
            each_list = sorted(each_list)
            if each_list not in final_list:
                final_list.append(each_list)
        
        return final_list

solution = Solution()
output = solution.subsetsWithDup([4,4,4,1,4])
print(output)
