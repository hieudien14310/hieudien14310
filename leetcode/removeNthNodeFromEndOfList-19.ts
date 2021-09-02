/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
 */
class ListNode19 {
	val: number
	next: ListNode19 | null
	constructor(val?: number, next?: ListNode19 | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}
const ll19 = new ListNode19(
	1,
	null,
	// new ListNode19(
	// 	2,
	// 	null,
	// 	// new ListNode19(3, new ListNode19(4, new ListNode19(5, null))),
	// ),
)
function removeNthFromEnd(
	head: ListNode19 | null,
	n: number,
): ListNode19 | null {
	const newHead = head
	let size = 0
	while (head !== null) {
		size++
		head = head.next
	}
	const removeNth = (
		newHead: ListNode19 | null,
		n: number,
		size: number,
	): ListNode19 | null => {
		let prev,
			current = newHead,
			count = 0
		if (size - n === 0) {
			if (newHead) newHead = newHead?.next
			return newHead
		} else if (n === 1) {
			while (count < size - 1) {
				prev = current
				if (current) current = current?.next
				count++
			}
			if (prev && prev.next) prev.next = null
			return newHead
		} else {
			while (count < size - n) {
				prev = current
				if (current) current = current?.next
				count++
			}
			if (prev && prev.next && current?.next) prev.next = current?.next
			return newHead
		}
	}
	return removeNth(newHead, n, size)
}
console.log(removeNthFromEnd(ll19, 1))
