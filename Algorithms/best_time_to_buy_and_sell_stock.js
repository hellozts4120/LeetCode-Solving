/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var ans = 0, minPrice = prices[0], i;
    for (i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        ans = Math.max(ans, prices[i] - minPrice);
    }
    return ans;
};