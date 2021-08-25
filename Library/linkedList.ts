class Node1 {
	data: number
	next: any
	constructor(data: number, next: any = null) {
		this.data = data
		this.next = next
	}
}
class LinkedList {
	head: any
	size: number
	constructor() {
		this.head = null
		this.size = 0
	}

	// Insert first node
	insertFirst(data: number) {
		this.head = new Node1(data, this.head)
		this.size++
	}
	// Insert last node
	insertLast(data: number) {
		let node = new Node1(data)
		let current
		if (!this.head) {
			this.head = node
		} else {
			current = this.head
			while (current.next) {
				current = current.next
			}
			current.next = node
		}
		this.size++
	}
	// Print list data
	printListData() {
		let current = this.head
		while (current) {
			console.log(current.data)
			current = current.next
		}
	}
}
const ll = new LinkedList()
// ll.insertFirst(100)
// ll.insertFirst(200)
ll.insertFirst(50)
ll.insertLast(500)
ll.printListData()
console.log(ll)
