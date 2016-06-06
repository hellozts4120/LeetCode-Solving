/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var len = nums.length, ans = [];
    if (!len) return 0;
    if (len === 1) return nums[0];
    ans.push([]);
    ans[0][0] = 0;  //not steal 1st room & not steal this room
    ans[0][1] = 0;  //not steal 1st room & steal this room
    ans[0][2] = 0;  //steal 1st room & not steal this room
    ans[0][3] = nums[0];    //steal 1st room & steal this room
    
    for (var i = 1; i < len; i++) {
        ans.push([]);
        ans[i][0] = Math.max(ans[i - 1][0], ans[i - 1][1]);
        ans[i][1] = nums[i] + ans[i - 1][0];
        ans[i][2] = Math.max(ans[i - 1][2], ans[i - 1][3]);
        ans[i][3] = nums[i] + ans[i - 1][2];
    }
    return Math.max(ans[i - 1][0], ans[i - 1][1], ans[i - 1][2]);
};