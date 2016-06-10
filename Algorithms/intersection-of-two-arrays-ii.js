/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let hash1 = {}, hash2 = {};
    
    nums1.forEach(function(item) {
        if (!hash1[item]) {
            hash1[item] = 1;
        }
        else {
            hash1[item]++;
        }
    });
    nums2.forEach(function(item) {
        if (!hash2[item]) {
            hash2[item] = 1;
        }
        else {
            hash2[item]++;
        }
    });
    
    let ans = [];
    for (let i in hash1) {
        if (hash2[i]) {
            ans.concat(new Array(Math.min(hash1[i], hash2[i])).fill(+i));
        }
    }
    return ans;
};