/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length != t.length) return false;
    
    let hash1 = {}, hash2 = {};
    let len = s.length;
    
    for (let i = 0; i < len; i++) {
        let a = s[i], b = t[i];
        if (!hash1[a] && !hash2[b]) {
            hash1[a] = b, hash2[b] = a;
        } else if (hash1[a] !== b || hash2[b] !== a) {
            return false;
        }
    }
    return true;
};