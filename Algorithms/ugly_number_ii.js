/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let DP = [], f1 = 0, f2 = 0, f3 = 0;
    DP.push(1);
    
    for (let i = 1; i < n; i++) {
        DP[i] = Math.min(DP[f1] * 2, DP[f2] * 3, DP[f3] * 5);
        if (DP[i] === DP[f1] * 2) {
            f1++;
        }
        if (DP[i] === DP[f2] * 3) {
            f2++;
        }
        if (DP[i] === DP[f3] * 5) {
            f3++;
        }
    }
    
    return DP[n - 1];
};