/**
 * https://leetcode.com/problems/design-hashset/
 *
 */
class MyHashSet {
	data: number[]
	constructor(data: number[] = []) {
		this.data = data
	}

	add(key: number): void {
		if (this.data.includes(key)) return
		this.data.push(key)
	}

	remove(key: number): void {
		const index = this.data.indexOf(key)
		if (index < 0) return
		else {
			const left = this.data.slice(0, index)
			const right = this.data.slice(index + 1, this.data.length)
			this.data = [...left, ...right]
		}
	}

	contains(key: number): boolean {
		if (this.data.includes(key)) return true
		return false
	}
}
const myHashSet: MyHashSet = new MyHashSet()
myHashSet.add(1)
myHashSet.add(2)
myHashSet.add(3)
myHashSet.add(4)
myHashSet.remove(3)
console.log(myHashSet)
