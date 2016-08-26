/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var hash = {};
    for (var i = 0, len = magazine.length; i < len; i++) {
        if (hash[magazine[i]] === undefined) {
            hash[magazine[i]] = 1;
        } else {
            hash[magazine[i]]++;
        }
    }
    
    for (var i = 0, len = ransomNote.length; i < len; i++) {
        if (hash[ransomNote[i]] === undefined || hash[ransomNote[i]] <= 0) return false;
        hash[ransomNote[i]]--;
    }
    return true;
};