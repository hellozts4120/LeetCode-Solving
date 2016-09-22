/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
    if (!A.length) {
        return 0;
    }
    var max = -Infinity;
    for (var i = 0, len = A.length; i < len; i++) {
        var temp = 0;
        for (var j = 0; j < len; j++) {
            temp += ((i + j) % len) * A[j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
};