class Solution(object):
    def subsetsWithDup(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        n = 1 << len(nums)
        result = []
        for i in range(0, n):
            subset = self.convert(i, nums)
            result.append(tuple(sorted(subset)))

        result = set(result)
        return [list(entries) for entries in result]

    def convert(self, i, nums):
        k = i
        index = 0
        res = []
        while k > 0:
            if (k & 1) == 1:
                res.append(nums[index])

            k >>= 1
            index += 1
        return res