/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n === (1 << (~~(Math.log(n) / Math.log(2))))
};