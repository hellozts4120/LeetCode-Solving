/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows <= 1 || s === "") {
        return s;
    }
    
    let ans = "";
    for (let i = 0; i < numRows; i++) {
        for (let j = 0, index = i; index < s.length; j++, index = (2 * numRows - 2) * j + i) {
            ans += s[index];
            if (i === 0 || i === numRows - 1) {
                continue;
            }
            if (index + (numRows - i - 1) * 2 < s.length) {
                ans += s[index+(numRows- i - 1) * 2];
            }
        }
    }
    
    return ans;
};