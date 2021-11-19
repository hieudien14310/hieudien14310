/**
 * https://leetcode.com/problems/add-two-numbers/
 *
 */
class ListNode2 {
	val: number
	next: ListNode2 | null
	constructor(val?: number, next?: ListNode2 | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}
const l1 = new ListNode2(
	1,
	new ListNode2(
		0,
		new ListNode2(
			0,
			new ListNode2(
				0,
				new ListNode2(
					0,
					new ListNode2(
						0,
						new ListNode2(
							0,
							new ListNode2(
								0,
								new ListNode2(
									0,
									new ListNode2(
										0,
										new ListNode2(
											0,
											new ListNode2(
												0,
												new ListNode2(
													0,
													new ListNode2(
														0,
														new ListNode2(
															0,
															new ListNode2(0, new ListNode2(1, null)),
														),
													),
												),
											),
										),
									),
								),
							),
						),
					),
				),
			),
		),
	),
)
const l2 = new ListNode2(5, new ListNode2(6, new ListNode2(4, null)))
function addTwoNumbers(
	l1: ListNode2 | null,
	l2: ListNode2 | null,
): ListNode2 | null {
	const reverseLinkedList = (head: ListNode2 | null): ListNode2 | null => {
		let prev: ListNode2 | null = null,
			current: ListNode2 | null = null
		while (head !== null) {
			prev = head
			head = head?.next
			if (prev) prev.next = current
			current = prev
		}
		return current
	}
	let revL1 = reverseLinkedList(l1)
	let revL2 = reverseLinkedList(l2)
	let [valL1, valL2] = ['', '']
	while (revL1 !== null) {
		valL1 += revL1.val
		revL1 = revL1.next
	}

	while (revL2) {
		valL2 += revL2.val
		revL2 = revL2.next
	}
	const sum = (BigInt(valL1) + BigInt(valL2)).toString()
	const result = new ListNode2(0, null)
	let current = result
	for (let i = 0; i < sum.length; i++) {
		current.val = parseInt(sum[i])
		if (i < sum.length - 1) {
			current.next = new ListNode2(0, null)
			current = current.next
		} else {
			current.next = null
		}
	}
	return reverseLinkedList(result)
}
console.log(addTwoNumbers(l1, l2))
