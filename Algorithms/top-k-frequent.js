/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = {};
    nums.forEach(function(item) {
        if (hash[item] === undefined) {
            hash[item] = 1;
        }
        else hash[item]++;
    });
    
    let arr = [], ans = [];
    for (let key in hash) {
        arr.push({key: key, value: hash[key]});
    }
    arr.sort(function(a, b) {
        return b.value - a.value;
    })
    
    for (let i = 0; i < k; i++) {
        ans.push(+arr[i].key);
    }
    return ans;
};