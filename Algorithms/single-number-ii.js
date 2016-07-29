/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var one = 0, two = 0, three = 0, len = nums.length;
    for (var i = 0; i <= len - 1; i++) {
        two = two | (one & nums[i]);
        one = one ^ nums[i];
        three = ~(one & two);
        one = one & three;
        two = two & three;
    }
    return one;
};