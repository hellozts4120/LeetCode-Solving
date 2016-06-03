/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0;
    var ans = 0, i;
    for (i = 1; i < prices.length; i++) {
        var temp = prices[i] - prices[i - 1];
        if (temp > 0) ans += temp;
    }
    return ans;
};