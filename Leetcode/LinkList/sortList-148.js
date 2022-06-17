"use strict";
/**
 * https://leetcode.com/problems/sort-list/
 *
 */
class ListNode148 {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
const ll148 = new ListNode148(4, new ListNode148(2, new ListNode148(1, new ListNode148(3, null))));
function sortList148(head) {
    const findMid = (head) => {
        let slow = head, fast = head === null || head === void 0 ? void 0 : head.next;
        while (fast !== null && (fast === null || fast === void 0 ? void 0 : fast.next) !== null) {
            if (slow)
                slow = slow === null || slow === void 0 ? void 0 : slow.next;
            fast = fast === null || fast === void 0 ? void 0 : fast.next.next;
        }
        return slow;
    };
    const mergeList = (l1, l2) => {
        let dummy = new ListNode148(0);
        let p = dummy;
        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                p.next = l1;
                l1 = l1.next;
            }
            else {
                p.next = l2;
                l2 = l2.next;
            }
            p = p.next;
        }
        if (l1 !== null) {
            p.next = l1;
        }
        if (l2 !== null) {
            p.next = l2;
        }
        return dummy.next;
    };
    if (head === null || head.next === null)
        return head;
    const midHead = findMid(head);
    if (midHead) {
        const right = sortList148(midHead.next);
        midHead.next = null;
        const left = sortList148(head);
        return mergeList(left, right);
    }
    else
        return midHead;
}
console.log(sortList148(ll148));
