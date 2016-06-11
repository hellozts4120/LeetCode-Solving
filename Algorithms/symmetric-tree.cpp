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
public:
    bool isSymmetric(TreeNode* root) {
        if (root == NULL) return true;
        
        return isSym(root->left, root->right);
    };
    
    bool isSym(TreeNode *left, TreeNode *right) {
        if (left == NULL && right == NULL) {
            return true;
        }
        else if (left == NULL || right == NULL) {
            return false;
        }
        else {
            if (left->val != right->val) {
                return false;
            }
            if (!isSym(left->left, right->right) || !isSym(left->right, right->left)) {
                return false;
            }
        }
        return true;
    }
};