/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let arr = str.split(' ');

    if (pattern.length !== arr.length)
        return false;

    let a2b = {}, b2a = {}, len = arr.length;
    for (let i = 0; i < len; i++) {
        let a = pattern[i], b = arr[i];
        
        if (!a2b[a]) {
            a2b[a] = b;
        } else {
            if (a2b[a] !== b) {
                return false;
            }
        }
        
        if (!b2a[b]) {
            b2a[b] = a;
        } else {
            if (b2a[b] !== a) {
                return false;
            }
        }
    }
    return true;
};