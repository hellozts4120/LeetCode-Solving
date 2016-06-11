/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
private:
    int ans;    
public:
    Solution() {
        ans = -1;
    };
    
    int maxDepth(TreeNode* root) {
        DFS(root, 0);
        return ans;
    };
    
    void DFS(TreeNode* root, int depth) {
        if (!root) {
            if (depth > ans) ans = depth;
            return;
        }
        DFS(root->left, depth + 1);
        DFS(root->right, depth + 1);
    }
};