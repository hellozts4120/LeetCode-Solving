/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let hash = {};
    nums1.forEach(function(item) {
        hash[item] = 1;
    });
    nums2.forEach(function(item) {
        if (hash[item]) hash[item] = 2;
    });
    
    let ans = [];
    for (let i in hash) {
        if (hash[i] === 2) {
            ans.push(parseInt(i));
        }
    }
    return ans;
};