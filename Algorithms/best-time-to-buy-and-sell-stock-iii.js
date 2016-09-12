/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices.length) return 0;
    let temp = new Array(3).fill(0), ans = new Array(3).fill(0);
    for (let i = 0, len = prices.length; i < len - 1; i++) {
        let diff = prices[i + 1] - prices[i];
        for (let j = 2; j > 0; j--) {
            temp[j] = Math.max(ans[j - 1] + Math.max(diff, 0), temp[j] + diff);
            ans[j] = Math.max(temp[j], ans[j]);
        }
    }
    return ans[2];
};