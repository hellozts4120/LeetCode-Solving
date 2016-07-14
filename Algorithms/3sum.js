/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let hash = {}, len = nums.length;
    
    nums.sort(function(a, b) {
        return a - b;
    });
    
    for (let i = 0; i < len; i++) {
        let item = nums[i];
        if (!hash[item]) {
            hash[item] = 1;
        } else {
            hash[item]++;
        }
    }
    
    let ans = [], tmp = {};
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            var a = nums[i], b = nums[j], c = - (a + b);
            if (c < b) break;
            if (tmp[a + ',' + b + ',' + c]) continue;
            
            hash[a]--;
            hash[b]--;
            
            if (hash[c]) {
                tmp[a + ',' + b + ',' + c] = true;
                ans.push([a, b, c]);
            }

            hash[a]++;
            hash[b]++;
        }
    }
    
    return ans;
};