/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = {};
    for (let i = 0, len = nums.length; i < len; i++) {
        if (hash[nums[i]]) {
            return true;
        }
        else {
            hash[nums[i]] = true;
        }
    }
    return false;
};