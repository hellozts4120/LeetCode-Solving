/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (!matrix.length) {
        return 0;
    }
    let n = matrix.length, m = matrix[0].length, ans = 0;
    //let DP = new Array(n).fill([]);
    let DP = [];
    for (let i = 0; i < n; i++) {
        DP[i] = [];
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === '1') {
                DP[i][j] = 1 + Math.min(i && j ? DP[i - 1][j - 1] : 0, i ? DP[i - 1][j] : 0, j ? DP[i][j - 1] : 0);
                if (DP[i][j] > ans) {
                    ans = DP[i][j];
                }
            }
            else {
                DP[i][j] = 0;
            }
        }
    }
    return ans * ans;
};