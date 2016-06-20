/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let minn = - (1 << 30) * 2;
    let maxn = (1 << 30) * 2 - 1;
    let ans;
    if (x < 0) {
        let arr = x.toString().split("");
        arr.shift();
        ans = (-1) * Number(arr.reverse().join(""));
    } else {
        ans = Number(x.toString().split("").reverse().join(""));
    }
    
    if (ans < minn || ans > maxn) {
        return 0;
    } else {
        return ans;
    }
};