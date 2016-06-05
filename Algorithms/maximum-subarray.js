/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = -Infinity, curSum = 0;
    nums.forEach(function (item) {
        curSum += item;
        if (curSum > max) {
            max = curSum;
        }
        if (curSum < 0) {
            curSum = 0;
        }
    });
    return max;
};