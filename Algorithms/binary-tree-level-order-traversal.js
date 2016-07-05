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
var levelOrder = function(root) {
    if (!root) return [];
    
    let ans = [], queue = [];
    queue.push(root);
    
    while(queue.length) {
        let temp = [], temp1 = [], len = queue.length;
        
        for (let i = 0; i < len; i++) {
            if (!queue[i]) continue;
            temp.push(queue[i].val);
            temp1.push(queue[i].left);
            temp1.push(queue[i].right);
        }
        
        queue = temp1.concat();
        if (temp.length) {
            ans.push(temp);
        }
    }
    
    return ans;
};