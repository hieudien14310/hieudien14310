"use strict";
/**
 * https://leetcode.com/problems/middle-of-the-linked-list/
 *
 */
class ListNode876 {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
const ll876 = new ListNode876(1, new ListNode876(2, new ListNode876(3, new ListNode876(4, new ListNode876(5, new ListNode876(6, null))))));
function middleNode(head) {
    let newHead = head;
    let size = 0;
    while (head !== null) {
        size++;
        head = head.next;
    }
    const middle = Math.floor(size / 2);
    let i = 0;
    while (i < middle) {
        if (newHead)
            newHead = newHead.next;
        i++;
    }
    return newHead;
}
console.log(middleNode(ll876));
