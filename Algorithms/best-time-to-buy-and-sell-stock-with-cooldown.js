/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = -Infinity, preBuy = 0, sell = 0, preSell = 0;
    for (let i = 0, len = prices.length; i < len; i++) {
        preBuy = buy;
        buy = Math.max(preSell - prices[i], preBuy);
        preSell = sell;
        sell = Math.max(preBuy + prices[i], preSell);
    }
    return sell;
};