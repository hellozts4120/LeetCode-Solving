/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1, max = 0;
    while (left <= right) {
        let cur = (right - left) * Math.min(height[left], height[right]);
        if (cur > max) {
            max = cur;
        }
        
        if (height[left] >= height[right]) {
            --right;
        } else {
            ++left;
        }
    }
    return max;
};