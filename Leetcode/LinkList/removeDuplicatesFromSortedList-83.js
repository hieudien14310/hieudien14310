"use strict";
/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 *
 */
function deleteDuplicates(head) {
    let current = head;
    while (current) {
        if (current.next !== null && current.value === current.next.value) {
            current.next = current.next.next;
        }
        else {
            current = current.next;
        }
    }
    return head;
}
// console.log(deleteDuplicates(ll83))
