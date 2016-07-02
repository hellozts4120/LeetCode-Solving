/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length, count = 1;
    if (len === 0) {
        return 0;
    }
    
    for (let i = 1; i < len; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        } else {
            nums[count] = nums[i];
            count++;
        }
    }
    
    return count;
};