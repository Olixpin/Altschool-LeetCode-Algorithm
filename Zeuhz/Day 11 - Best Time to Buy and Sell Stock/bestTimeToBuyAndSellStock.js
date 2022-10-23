const maxProfit = (prices) => {
  let min = prices[0];
  let maxProfit = 0;
  let profit;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    if (prices[i] > min) profit = prices[i] - min;
    if (profit > maxProfit) maxProfit = profit;
  }
  return maxProfit;
};
