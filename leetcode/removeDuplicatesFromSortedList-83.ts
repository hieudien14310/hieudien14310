/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 *
 */
import { Node1 } from '../Library/linkedList'
const ll83 = new Node1(
	1,
	new Node1(1, new Node1(2, new Node1(3, new Node1(3, null)))),
)
function deleteDuplicates(head: Node1 | null): Node1 | null {
	let current = head
	while (current) {
		if (current.next !== null && current.value === current.next.value) {
			current.next = current.next.next
		} else {
			current = current.next
		}
	}
	return head
}
console.log(deleteDuplicates(ll83))
