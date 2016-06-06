/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var len = nums.length, ans = [];
    if (!len) return 0;
    ans.push([]);
    ans[0][0] = 0, ans[0][1] = nums[0];
    
    for (var i = 1; i < len; i++) {
        ans.push([]);
        ans[i][0] = Math.max(ans[i - 1][1], ans[i - 1][0]);
        ans[i][1] = nums[i] += ans[i - 1][0];
    }
    return Math.max(ans[len - 1][0], ans[len - 1][1]);
};