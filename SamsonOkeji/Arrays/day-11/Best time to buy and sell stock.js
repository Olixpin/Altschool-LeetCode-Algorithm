var maxProfit = function(prices) {
    let globalProfit = 0;
    let minBuyPrice = Infinity;
    for (let i = 0; i < prices.length; i++) {
        if (minBuyPrice > prices[i]) {
            minBuyPrice = prices[i];
        }
        const currentProfit = prices[i] - minBuyPrice;
        if (currentProfit > globalProfit) {
            globalProfit = currentProfit;
        }
    }

  return globalProfit;
    
};