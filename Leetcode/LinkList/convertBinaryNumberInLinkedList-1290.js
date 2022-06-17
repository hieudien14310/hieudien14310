"use strict";
/**
 * https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
 *
 */
class ListNode1290 {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
const ll1290 = new ListNode1290(1, new ListNode1290(0, new ListNode1290(1, null)));
function getDecimalValue(head) {
    let strN = '';
    while (head) {
        strN += head.val;
        head = head.next;
    }
    return parseInt(strN, 2);
}
console.log(getDecimalValue(ll1290));
