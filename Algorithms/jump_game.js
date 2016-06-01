/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var jumpMax = 0, i;
    for (i = 0; i < nums.length; i++) {
        if (jumpMax < i) break;
        jumpMax = Math.max(jumpMax, nums[i] + i);
    }
    return (jumpMax >= nums.length - 1);
};