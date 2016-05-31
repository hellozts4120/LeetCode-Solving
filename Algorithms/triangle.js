/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var temp = [];
    var n = triangle.length;
    for (var i = 0; i < n; i++) {
        temp.push([]);
    }
    for (i = 0; i < n; i++) {
        temp[n - 1][i] = triangle[n - 1][i];
    }
    
    for (i = n - 2; i >= 0; i--) {
        for (var j = 0; j < triangle[i].length; j++) {
            temp[i][j] = triangle[i][j] + Math.min(temp[i + 1][j], temp[i + 1][j + 1]);
        }
    }
    return temp[0][0];
};