/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (var i = 0, len = s.length; i < len; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
    }
    return -1;
};