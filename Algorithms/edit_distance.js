/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    var m = word1.length, n = word2.length, i, j;
    var temp = [];
    if (!m && !n) return 0;
    for (i = 0; i <= m; i++) {
        temp.push([]);
        temp[i][0] = i;
    }
    
    for (i = 0; i <= n; i++) {
        temp[0][i] = i;
    }
    for (i = 1; i <= m; i++) {
        for (j = 1; j <= n; j++) {
            temp[i][j] = temp[i - 1][j - 1];
            if (word1[i - 1] !== word2[j - 1]) temp[i][j]++;
            temp[i][j] = Math.min(temp[i][j], Math.min(temp[i - 1][j] + 1, temp[i][j - 1] + 1));
        }
    }
    return temp[m][n];
};