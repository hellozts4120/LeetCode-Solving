/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var i, j, m = obstacleGrid.length, n = obstacleGrid[0].length;
    var temp = [];
    if (obstacleGrid[0][0]) return 0;
    for (i = 0; i < m; i++) {
        temp.push([]);
    }
    
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) temp[i][j] = 0;
            else if (i === 0 && j === 0) temp[i][j] = 1;
            else if (i === 0) temp[i][j] = temp[i][j - 1];
            else if (j === 0) temp[i][j] = temp[i - 1][j];
            else temp[i][j] = temp[i][j - 1] + temp[i - 1][j];
        }
    }
    return temp[m - 1][n - 1];
};