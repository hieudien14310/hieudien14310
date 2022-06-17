"use strict";
/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
 */
class ListNode19 {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
const ll19 = new ListNode19(1, null);
function removeNthFromEnd(head, n) {
    const newHead = head;
    let size = 0;
    while (head !== null) {
        size++;
        head = head.next;
    }
    const removeNth = (newHead, n, size) => {
        let prev, current = newHead, count = 0;
        if (size - n === 0) {
            if (newHead)
                newHead = newHead === null || newHead === void 0 ? void 0 : newHead.next;
            return newHead;
        }
        else if (n === 1) {
            while (count < size - 1) {
                prev = current;
                if (current)
                    current = current === null || current === void 0 ? void 0 : current.next;
                count++;
            }
            if (prev && prev.next)
                prev.next = null;
            return newHead;
        }
        else {
            while (count < size - n) {
                prev = current;
                if (current)
                    current = current === null || current === void 0 ? void 0 : current.next;
                count++;
            }
            if (prev && prev.next && (current === null || current === void 0 ? void 0 : current.next))
                prev.next = current === null || current === void 0 ? void 0 : current.next;
            return newHead;
        }
    };
    return removeNth(newHead, n, size);
}
console.log(removeNthFromEnd(ll19, 1));
