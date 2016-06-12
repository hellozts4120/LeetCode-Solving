/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (!num) {
        return false;
    }
    let fac = [2, 3, 5];
    fac.forEach(function(item) {
        while (num % item === 0) {
            num /= item;
        }
    });
    
    return (num === 1);
};