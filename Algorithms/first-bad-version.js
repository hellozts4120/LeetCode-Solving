/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var low = 1, high = n, mid;
        while(low <= high) {
            mid = Math.floor((low + high) / 2);
            if (isBadVersion(mid) === true) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        
        return low;
    };
};