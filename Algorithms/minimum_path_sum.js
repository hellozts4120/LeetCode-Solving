/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length, n = grid[0].length, i, j;
    var temp = [];
    for (i = 0; i < m; i++) {
        temp.push([]);
    }
    
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            if (i === 0 && j === 0) temp[i][j] = grid[i][j];
            else if (i === 0) temp[i][j] = temp[i][j - 1] + grid[i][j];
            else if (j === 0) temp[i][j] = temp[i - 1][j] + grid[i][j];
            else temp[i][j] = Math.min(temp[i][j - 1], temp[i - 1][j]) + grid[i][j];
        }
    }
    return temp[m - 1][n - 1];
};