/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "M", "MM", "MMM"];
    let ans = "", offset = 0;
    while (num) {
        ans = roman[num % 10 + offset] + ans;
        num = ~~(num / 10);
        offset += 10;
    }
    return ans;
};