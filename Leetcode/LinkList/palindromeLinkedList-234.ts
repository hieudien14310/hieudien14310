/**
 * https://leetcode.com/problems/palindrome-linked-list/
 *
 */
class ListNode234 {
	val: number
	next: ListNode234 | null
	constructor(val?: number, next?: ListNode234 | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}
const ll234 = new ListNode234(
	1,
	new ListNode234(2, new ListNode234(2, new ListNode234(1, null))),
)
function isPalindromeLinkedList(head: ListNode234 | null): boolean {
	const listVal = []
	while (head) {
		listVal.push(head.val)
		head = head.next
	}
	const cloVals = [...listVal]
	return cloVals.reverse().join('') === listVal.join('')
}
console.log(isPalindromeLinkedList(ll234))
