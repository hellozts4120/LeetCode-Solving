/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var trimer = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)", "g");
    s = s.replace(trimer, "");
    var _s = s.replace(/\s/g, '');
    if (!_s.length) {
        return 0;
    }
    
    for (var i = s.length; i--; ) {
        if (s[i] === ' ') {
          return s.length - i - 1;
        }
    
        if (i === 0) {
          return s.length - i;
        }
    }
};