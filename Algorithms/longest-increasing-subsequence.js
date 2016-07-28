/**
 * @param {number[]} nums
 * @return {number}
 */
 
function binarySearch(arr, tar) {
    var left = 0, right = arr.length - 1;

    while(left <= right) {
        var mid = ~~((left + right) >> 1);
        if (arr[mid] >= tar)
            right = mid - 1;
        else 
            left = mid + 1;
    }

    return right;
}

var lengthOfLIS = function(nums) {
    var arr = [];
    nums.forEach(function(item) {
        var index = binarySearch(arr, item) + 1;
        if (arr[index] === undefined) {
            arr[index] = item;
        } else {
            arr[index] = Math.min(arr[index], item)
        }
    });
    
    return arr.length;
};