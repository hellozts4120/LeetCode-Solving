/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var ans = -Infinity, max = 1, min = 1;
    for (let i = 0; i < nums.length; i++) {
        var curMax = max * nums[i], curMin = min * nums[i];
        ans = Math.max(ans, curMax, curMin);
        max = Math.max(curMax, curMin, 1);
        min = Math.min(curMax, curMin, 1);
    }
    return ans;
};