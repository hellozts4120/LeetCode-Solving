/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let len = citations.length;
    for (let i = len; ; i--) {
        if ((!i || citations[len - i] >= i) && (len - i - 1 < 0 || citations[len - i - 1] <= i)) {
            return i;
        }
    }
};