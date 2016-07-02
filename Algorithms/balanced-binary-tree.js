/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 
var ans = true;

var DFS = function(node) {
    if (!node) return;
    
    var a = node.left ? DFS(node.left) : 0, b = node.right ? DFS(node.right) : 0;
    if (Math.abs(a - b) > 1) {
        ans = false;
    }
    
    return Math.max(a, b) + 1;
}

var isBalanced = function(root) {
    DFS(root);
    return ans;
};