/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var temp = [];
    var i, j;
    for (i = 0; i < m; i++) {
        temp.push([]);
    }
    
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            if (i === 0 || j === 0) temp[i][j] = 1;
            else {
                temp[i][j] = temp[i - 1][j] + temp[i][j - 1];
            }
        }
    }
    return temp[m - 1][n - 1];
};