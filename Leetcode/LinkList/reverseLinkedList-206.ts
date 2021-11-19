/**
 * https://leetcode.com/problems/reverse-linked-list/
 *
 */
class ListNode {
	value: number | undefined
	next: ListNode | null
	constructor(value: number, next: ListNode | null) {
		this.value = value === undefined ? 0 : value
		this.next = next === undefined ? null : next
	}
}
const ln = new ListNode(1, new ListNode(2, new ListNode(3, null)))
function reverseList(head: ListNode | null): ListNode | null {
	let tmp = null,
		newHead = null
	while (head !== null) {
		tmp = head
		head = head.next
		tmp.next = newHead
		newHead = tmp
	}
	return newHead
}
console.log('result: ', reverseList(ln))
