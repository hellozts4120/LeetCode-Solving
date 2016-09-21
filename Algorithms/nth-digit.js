/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    var i = 1, m = n, num = 0, bit = 0;
    if (n < 10) {
        return n; 
    }
    while (n > i * 9 * Math.pow(10, i - 1)) {
        m -= i * 9 * Math.pow(10, i - 1);  
        i++;  
    }  
    num = Math.floor((m - 1) / i + Math.pow(10, i - 1));  
    bit = (m - 1) % i + 1;  
    while (bit != i) {  
        num = Math.floor(num / 10);  
        i--;  
    }  
    return num % 10;  
};