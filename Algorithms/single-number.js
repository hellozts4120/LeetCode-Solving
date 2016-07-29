/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var ans = 0, len = nums.length;
    for (var i = 0; i <= len - 1; i++) {
        ans = ans ^ nums[i];
    }
    return ans;
};