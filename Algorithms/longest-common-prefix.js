/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return "";
    }
    let len = strs.reduce(function(pre, item) {
        return Math.min(pre, item.length);
    }, Number.MAX_VALUE);
    
    let ans = "";
    for (let i = 0; i < len; i++) {
        let cur = strs[0][i];
        let obj = strs.every(function(item) {
            return item[i] === cur;
        });
        if (!obj) break;
        
        ans += cur;
    }
    
    return ans;
};