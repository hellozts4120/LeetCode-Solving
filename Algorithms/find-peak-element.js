/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var left = 0, right = nums.length - 1;
    while(left <= right) {
        var mid = Math.floor((left + right) / 2);
        var leftNum = (mid === 0) ? (nums[mid] - 1) : (nums[mid - 1]);
        var rightNum = (mid === nums.length - 1) ? (nums[mid] + 1) : (nums[mid + 1]);
        if (nums[mid] > leftNum && nums[mid] > rightNum) return mid;
        if (nums[mid] > leftNum) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return mid;
};