/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        if (head == NULL) {
            return NULL;
        }
        ListNode *pre = NULL;
        ListNode *i1 = head, *i2 = head;
        for(int i = 0; i < n - 1; i++) {
            i1 = i1->next;
        }
        
        while (i1->next) {
            pre = i2;
            i1 = i1->next;
            i2 = i2->next;
        }
        
        if (pre == NULL) {
            head = i2->next;
            delete i2;
        } else {
            pre->next = i2->next;
            delete i2;
        }
        
        return head;
    }
};