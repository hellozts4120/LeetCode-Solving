/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let len = citations.length;
    for (let i = len; ; i--) {
        let count = 0, countEqual = 0;
        citations.forEach(function(item, index) {
            if (item > i) {
                count++;
            }
            if (item === i) {
                countEqual++;
            }
        });
        
        if (count > i || count + countEqual < i) {
            continue;
        }
        return i;
    }
};