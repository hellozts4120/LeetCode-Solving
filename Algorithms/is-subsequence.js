/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let last = 0, i, j;
    let len1 = s.length, len2 = t.length;
    if (!len1) return true;
    for (i = 0; i < len1; i++) {
        for (j = last; j < len2; j++) {
            if (s[i] === t[j]) {
                last = j + 1;
                break;
            }
        }
        if (j === len2) return false;
    }
    return (j < len2);
};