/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

var ans, sta; 
 
function DFS(root) {
    if (!root) return;
    sta.push(root.val);
    
    if (!root.left && !root.right) {
        var str = sta.reduce((pre, item) => (pre + '->' + item)).toString();
        ans.push(str);
        sta.pop();
        return;
    }
    
    if (root.left) {
        DFS(root.left);
    }
    if (root.right) {
        DFS(root.right);
    }
    
    sta.pop();
} 
 
var binaryTreePaths = function(root) {
    ans = [], sta = [];
    DFS(root);
    return ans;
};