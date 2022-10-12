 function maxProfit(prices){
  let minBuyPrice = prices[0]
  let max = 0
  
  for (let i=1; i < prices.length; i++){
  let sellPrice = prices [i]
  let profit = sellPrice - minBuyPrice;
  max = Math.max(max, profit);
  minBuyPrice = Math.min(minBuyPrice, prices[i])
  
      }
      return max
  };
  console.log(maxProfit[7, 1, 5, 3, 6, 4])