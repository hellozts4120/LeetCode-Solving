/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
//reverse-bits
var reverseBits = function(n) {
    var ans = 0;
    for (var i = 0; i < 32; i++, n >> 1) {
        ans = ans << 1 | (n & 1);
    }
    
    return ans;
};