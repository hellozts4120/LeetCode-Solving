/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var ans = [];
    ans[0] = 1, ans[1] = 1;
    for (var i = 2; i <= n; i++) {
        ans[i] = 0;
        for (var j = 0; j < i; j++) {
            ans[i] += ans[j] * ans[i - j - 1];
        }
    }
    return ans[n];
};