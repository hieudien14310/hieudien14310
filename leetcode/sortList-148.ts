/**
 * https://leetcode.com/problems/sort-list/
 *
 */
class ListNode148 {
	val: number
	next: ListNode148 | null
	constructor(val?: number, next?: ListNode148 | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}
const ll148 = new ListNode148(
	4,
	new ListNode148(2, new ListNode148(1, new ListNode148(3, null))),
)
function sortList148(head: ListNode148 | null): ListNode148 | null {
	const findMid = (head: ListNode148 | null) => {
		let slow = head,
			fast = head?.next
		while (fast !== null && fast?.next !== null) {
			if (slow) slow = slow?.next
			fast = fast?.next.next
		}
		return slow
	}
	const mergeList = (l1: ListNode148 | null, l2: ListNode148 | null) => {
		let dummy = new ListNode148(0)
		let p = dummy
		while (l1 !== null && l2 !== null) {
			if (l1.val < l2.val) {
				p.next = l1
				l1 = l1.next
			} else {
				p.next = l2
				l2 = l2.next
			}
			p = p.next
		}

		if (l1 !== null) {
			p.next = l1
		}

		if (l2 !== null) {
			p.next = l2
		}
		return dummy.next
	}

	if (head === null || head.next === null) return head
	const midHead: ListNode148 | null = findMid(head)
	if (midHead) {
		const right = sortList148(midHead.next)
		midHead.next = null
		const left = sortList148(head)
		return mergeList(left, right)
	} else return midHead
}
console.log(sortList148(ll148))
