/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let minn = - (1 << 30) * 2;
    let maxn = (1 << 30) * 2 - 1;
    var val = parseInt(str);
    if (str === null || str.length === 0 || isNaN(val)) {
        return 0;
    }
    
    if (val > 0 && val > maxn) {
        return maxn;
    }
    
    if (val < 0 && val < minn) {
        return minn;
    }
    
    return val;
};