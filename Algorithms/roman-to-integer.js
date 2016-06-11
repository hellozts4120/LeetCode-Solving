/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let hash = {}, ans = 0;
    hash["I"] = 1;
    hash["V"] = 5;
    hash["X"] = 10;
    hash["L"] = 50;
    hash["C"] = 100;
    hash["D"] = 500;
    hash["M"] = 1000;
    
    for (let i = 0; i < s.length; i++) {
        let cur = hash[s[i]];
        let next = (i + 1 === s.length) ? 0 : hash[s[i + 1]];
        
        if (next > cur) {
            ans += next - cur;
            i++;
        }
        else {
            ans += cur;
        }
    }
    return ans;
};