class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        currentIndex, nextIndex, maxProfit = 0, 1, 0

        while nextIndex < len(prices):
            if prices[currentIndex] < prices[nextIndex]:
                profit = prices[nextIndex] - prices[currentIndex]
                maxProfit = max(maxProfit, profit)
            else:
                currentIndex = nextIndex
            nextIndex += 1
        return maxProfit

solution = Solution().maxProfit([7,1,5,3,6,4])
print(solution)
