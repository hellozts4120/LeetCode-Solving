/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var maxLength = 0, curStep = 0, tempLength = 0, i;
    for (i = 0; i < nums.length;) {
        if (maxLength >= nums.length - 1) break;
        while (tempLength >= i) {
            maxLength = Math.max(maxLength, nums[i] + i);
            i++;
        }
        curStep++;
        tempLength = maxLength;
    }
    return curStep;
};