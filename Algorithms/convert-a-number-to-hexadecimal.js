/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    let res = "";
    for (let i = 0; i < 8; i++) {
        res += ('0123456789abcdef'[num & 15]);
        num >>= 4;
    }
    res = res.split('').reverse().join('');
    while (res.length > 1 && res[0] == '0') {
        res = res.substr(1);
    }
    return res;
};