/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let result = a ^ b;
    let carry = (a & b) << 1;
    if (carry !== 0) {
        return getSum(result, carry);
    }
    return result;
};