/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0, ans, head;
    while(l1 || l2) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let sum = val1 + val2 + carry;
        carry = ~~(sum / 10);
        
        let node = new ListNode(sum % 10);
        if (!ans) {
            ans = head = node;
        } else {
            head.next = node;
            head = node;
        }
        
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    
    if (carry) {
        let node = new ListNode(carry);
        head.next = node;
        head = node;
    }
    
    return ans;
};