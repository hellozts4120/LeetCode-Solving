/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var ans = [], add = 0, len = digits.length, i;
    digits[len - 1]++;
    for (i = len - 1; i >= 0; i--) {
        var sum = digits[i] + add;
        ans[i] = sum % 10;
        add = ~~(sum / 10);
    }
    if (add) {
        ans.unshift(1);
    }
    return ans;
};