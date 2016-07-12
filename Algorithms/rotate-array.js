/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//rotate-array
var rotate = function(nums, k) {
    k %= nums.length;
    var temp = [];
    if (k) {
        temp = nums.slice(-k);
    }
    nums.splice(-k, k);
    
    Array.prototype.unshift.apply(nums, temp);
};