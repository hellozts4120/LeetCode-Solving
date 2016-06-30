/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let sec = secret.split(""), gue = guess.split(""), len = sec.length;
    let bulNum = 0, cowNum = 0;
    let hash = {};
    
    for (let i = len; i--; ) {
        if (sec[i] === gue[i]) {
            sec.splice(i, 1);
            gue.splice(i, 1);
            bulNum++;
        } else {
            if (!hash[sec[i]]) {
                hash[sec[i]] = 1;
            } else {
                hash[sec[i]]++;
            }
        }
    }
    
    for (let i = 0; i < gue.length; i++) {
        if (hash[gue[i]]) {
            cowNum++;
            hash[gue[i]]--;
        }
    }
    
    return bulNum + 'A' + cowNum + 'B';
};