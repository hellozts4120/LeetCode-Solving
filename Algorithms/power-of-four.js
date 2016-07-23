/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (!num) return false;
    var tmp = Math.log(num) / Math.log(4);
    return (Math.pow(4, Math.floor(tmp)) === num || Math.pow(4, Math.ceil(tmp)) === num);
};