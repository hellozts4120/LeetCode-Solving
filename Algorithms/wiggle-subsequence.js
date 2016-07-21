/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let len = nums.length;
    if (len < 2) {
        return len;
    }
    
    let minus = nums[1] - nums[0];
    let ans = 1 + !!minus;
    for (let i = 2; i < len; i++) {
        let newMinus = nums[i] - nums[i - 1];
        if (newMinus !== 0 && newMinus * minus < 0) {
            ans += 1;
            minus = newMinus;
        }
    }
    return ans;
};