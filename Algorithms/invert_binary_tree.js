/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return root;
    }
    var left = root.left, right = root.right;
    left && invertTree(left);
    right && invertTree(right);
    root.right = left;
    root.left = right;
    
    return root;
};