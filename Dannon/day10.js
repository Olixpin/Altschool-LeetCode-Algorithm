const price = [2,4,7,9,2,1]
var maxProfit = function(price) {
    let min = price[0]
    let max = 0
    for(let i = 0; i < price.length; i++) {
        let price = prices[i]
        if(price < min) min = price;
        if(price - min > max) {
            max = price - min;
        }
    }
    return max
}
