/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let arr = [];
    for (let i = 0, len = nums.length; i < len; i++) {
        if (arr[nums[i]] === undefined) {
            arr[nums[i]] = i;
        } else {
            if (i - arr[nums[i]] <= k) {
                return true;
            }
            arr[nums[i]] = i;
        }
    }
    return false;
};