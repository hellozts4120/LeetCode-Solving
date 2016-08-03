/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split('').reverse();
    b = b.split('').reverse();
    var ans = [], add = 0;
    
    for (var i = 0, len = Math.max(a.length, b.length); i <= len - 1; i++) {
        var sum = (a[i] === undefined ? 0 : Number(a[i])) + (b[i] === undefined ? 0: Number(b[i])) + add;
        ans[i] = sum & 1;
        if (sum >= 2) {
            add = 1;
        } else { 
            add = 0;
        }
    }
    
    if (add) ans[len] = 1;
    return ans.reverse().join('').toString();
};