var maxProfit = function (prices) {
    var maxprofit = 0;
    for (var i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1])
            maxprofit += prices[i] - prices[i - 1];
    }
    console.log(maxProfit);
    return maxprofit;
}