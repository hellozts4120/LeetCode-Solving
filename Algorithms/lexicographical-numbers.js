/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    var res = [];
    for (var i = 1; i < 10; i++) {
        if (!DFS(i, res, n)) break;
    }
    return res;
};

function DFS(num, res, n) {
    if (num > n) return false;
    res.push(num);
    for (var i = 0; i < 10; i++) {
        if (!DFS(num * 10 + i, res, n)) break;
    }
    return true;
}