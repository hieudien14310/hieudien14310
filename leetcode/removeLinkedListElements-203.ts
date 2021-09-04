/**
 * https://leetcode.com/problems/remove-linked-list-elements/
 *
 */
class ListNode203 {
	val: number
	next: ListNode203 | null
	constructor(val?: number, next?: ListNode203 | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}
const ll203 = new ListNode203(
	1,
	new ListNode203(
		2,
		new ListNode203(
			2,
			new ListNode203(
				1,
				null,
				// new ListNode203(4, new ListNode203(5, new ListNode203(6, null))),
			),
		),
	),
)
function removeElements(
	head: ListNode203 | null,
	val: number,
): ListNode203 | null {
	/**
	 * Trường hợp 1: Nếu giá trị val ở vị trí đầu tiên trong linked list thì
	 * loại bỏ nó ra.
	 *
	 */
	while (head && head.val === val) {
		head = head.next
	}
	// => Sẽ không bao giờ còn giá trị val đứng ở đầu linked list.

	let current = head
	while (current && current.next) {
		if (current.next.val === val) current.next = current.next.next
		else current = current.next
	}
	return head
}
console.log(removeElements(ll203, 2))
