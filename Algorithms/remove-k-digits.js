/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    while (true) {
        let len = num.length;
        if (len <= k || !len) {
            return 0 + '';
        }
        if (!k) {
            return num;
        }
        
        k--;
        if (num[0] === '0') {
            let digits = 1;
            while (digits < len && num[digits] == '0') {
                digits++;
            }
            num = num.substr(digits);
        } else {
            let digits = 0;
            while (digits < len - 1 && num[digits] <= num[digits + 1]) {
                digits++;
            }
            num = num.substr(0, digits) + num.substr(digits + 1);
            if (num[0] === '0') {
                k++;
            }
        }
    }
};