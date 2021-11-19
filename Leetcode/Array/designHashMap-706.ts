/**
 * https://leetcode.com/problems/design-hashmap/
 *
 */
class MyHashMap {
	hm: Map<number, number>
	constructor(hm: Map<number, number> = new Map()) {
		this.hm = hm
	}

	put(key: number, value: number): void {
		this.hm.set(key, value)
	}

	get(key: number): number {
		return this.hm.get(key) ?? -1
	}

	remove(key: number): void {
		this.hm.delete(key)
	}
}
const myHashMap: MyHashMap = new MyHashMap()
myHashMap.put(1, 1)
myHashMap.put(2, 2)
myHashMap.put(3, 4)
myHashMap.put(11, 0)
myHashMap.remove(3)
console.log(myHashMap)
