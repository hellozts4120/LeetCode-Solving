/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n === 2) {
        return 1;
    }
    if (n === 3) {
        return 2;
    }
    
    var dp = [];
    dp[0] = dp[1] = 1;
    dp[2] = 2, dp[3] = 3;
    
    for (let i = 4; i <= n; i++) {
        dp[i] = Math.max(dp[i - 3] * 3, dp[i - 2] * 2);
    }
    
    return dp[n];
};