/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 
function DFS(root, max, min) {
    if (root === null) {
        return true;
    }
    if (root.val >= max || root.val <= min) {
        return false;
    }
    
    return DFS(root.left, root.val, min) && DFS(root.right, max, root.val);
}
 
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (root === null) {
        return true;
    }
    
    return DFS(root, Infinity, -Infinity);
};