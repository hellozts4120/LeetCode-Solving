/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 
function DFS(node) {
    node.dp = [];   //dp[0]: steal this node; dp[1]: don't steal this node;
    if (node.left === null && node.right === null) {
        node.dp[0] = node.val;
        node.dp[1] = 0;
    }
    
    node.left && DFS(node.left);
    node.right && DFS(node.right);
    
    node.dp[0] = node.val + (node.left ? (node.left.dp[1]) : 0) + (node.right ? (node.right.dp[1]) : 0);
    node.dp[1] = (node.left ? Math.max(node.left.dp[0], node.left.dp[1]) : 0) + (node.right ? Math.max(node.right.dp[0], node.right.dp[1]) : 0);
}
 
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    if (!root) return 0;
    
    DFS(root);
    return Math.max(root.dp[0], root.dp[1]);
};