/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for (let i = 0, len = nums.length; i < len; i++) {
        for (let j = i + 1; j <= Math.min(i + k, len - 1); j++) {
            if (Math.abs(nums[i] - nums[j]) <= t) {
                return true;
            }
        }
    }
    
    return false;
};