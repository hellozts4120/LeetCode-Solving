/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (!s.length || s[0] === '0') {
        return 0;
    }
    var ans = [];
    ans[0] = 1, ans[1] = 1;
    for (var i = 1; i < s.length; i++) {
        ans[i + 1] = 0;
        var sum = parseInt(s[i - 1]) * 10 + parseInt(s[i]);
        if (sum <= 26 && sum >= 10) {
            ans[i + 1] += ans[i - 1];
        }
        if (s[i] !== '0') {
            ans[i + 1] += ans[i];
        }
    }
    return ans[s.length];
};