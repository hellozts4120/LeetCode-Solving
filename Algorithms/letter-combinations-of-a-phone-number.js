/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let ans = [];
    if (!digits.length) return ans;
    ans.push('');
    for (let i = 0; i < digits.length; i++) {
        let temp = [];
        let ch = map[parseInt(digits[i])];
        for (let j = 0; j < ch.length; j++) {
            for (let k = 0; k < ans.length; k++) {
                temp.push(ans[k] + ch[j]);
            }
        }
        ans = temp;
    }
    return ans;
};