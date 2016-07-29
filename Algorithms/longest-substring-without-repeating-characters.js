/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    let hash = new Set(), len = s.length;
    let max = 0, curPos = 0, i = 0;
    
    for (i = 0; i <= len - 1; i++) {
        if (hash.has(s[i])) {
            if (max < i - curPos) {
                max = i - curPos;
            }
            while (s[curPos] !== s[i]) {
                hash.delete(s[curPos]);
                curPos++;
            }
            curPos++;
        } else {
            hash.add(s[i]);
        }
    }
    
    return Math.max(max, i - curPos);
};