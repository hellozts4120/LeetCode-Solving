/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (!n) return false;
    var tmp = Math.log(n) / Math.log(3);
    return (Math.pow(3, Math.floor(tmp)) === n || Math.pow(3, Math.ceil(tmp)) === n);
};