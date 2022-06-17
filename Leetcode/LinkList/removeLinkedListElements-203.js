"use strict";
/**
 * https://leetcode.com/problems/remove-linked-list-elements/
 *
 */
class ListNode203 {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
const ll203 = new ListNode203(1, new ListNode203(2, new ListNode203(2, new ListNode203(1, null))));
function removeElements(head, val) {
    /**
     * Trường hợp 1: Nếu giá trị val ở vị trí đầu tiên trong linked list thì
     * loại bỏ nó ra.
     *
     */
    while (head && head.val === val) {
        head = head.next;
    }
    // => Sẽ không bao giờ còn giá trị val đứng ở đầu linked list.
    let current = head;
    while (current && current.next) {
        if (current.next.val === val)
            current.next = current.next.next;
        else
            current = current.next;
    }
    return head;
}
console.log(removeElements(ll203, 2));
