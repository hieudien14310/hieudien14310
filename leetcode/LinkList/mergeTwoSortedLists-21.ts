/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
 */
class ListNode21 {
	val: number
	next: ListNode21 | null
	constructor(val?: number, next?: ListNode21 | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}
const ll211 = new ListNode21(1, new ListNode21(2, new ListNode21(5)))
const ll212 = new ListNode21(1, new ListNode21(3, new ListNode21(4)))
function mergeTwoLists(
	l1: ListNode21 | null,
	l2: ListNode21 | null,
): ListNode21 | null {
	if (l1 === null) return l2
	if (l2 === null) return l1
	if (l1.val < l2.val) {
		l1.next = mergeTwoLists(l1.next, l2)
		return l1
	} else {
		l2.next = mergeTwoLists(l1, l2.next)
		return l2
	}
}
console.log(mergeTwoLists(ll211, ll212))
