/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 
 var ans;
 
 function DFS(root, depth) {
     if (!root || (ans && depth >= ans)) {
         return;
     }
     
     if (!root.left && !root.right) {
         ans = depth;
         return;
     }
     
     if (root.left) {
         DFS(root.left, depth + 1);
     }
     if (root.right) {
         DFS(root.right, depth + 1);
     }
 }
 
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    ans = 0
    DFS(root, 1);
    return ans;
};