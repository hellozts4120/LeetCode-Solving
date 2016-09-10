/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let hash = {};
    for (let i of t) {
        if (!hash[i]) {
            hash[i] = 1;
        } else {
            hash[i]++;
        }
    }
    for (let i of s) {
        if (hash[i]) {
            hash[i]--;
        }
    }
    for (let i in hash) {
        if (hash[i]) return i;
    }
};