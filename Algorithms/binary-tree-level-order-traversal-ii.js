/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) return [];
    let ans = [], tmp = [root];
    while(tmp.length) {
        var res = [], tmp1 = [];
        tmp.forEach(function(item) {
            res.push(item.val);
            if (item.left) tmp1.push(item.left);
            if (item.right) tmp1.push(item.right);
        });
        ans.push(res);
        tmp = tmp1;
    }
    
    return ans.reverse();
};