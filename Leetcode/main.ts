class BinarySearch {
	/**
	 * Number: 2089
	 * targetIndices: https://leetcode.com/problems/find-target-indices-after-sorting-array/
	 */
	public targetIndices(nums: number[], target: number): number[] {
		nums.sort((a, b) => a - b)
		const binarySearch = (left: number, right: number): number => {
			if (left <= right) {
				const mid = Math.floor((left + right) / 2)
				if (nums[mid] === target) return mid
				else if (nums[mid] > target) return binarySearch(left, mid - 1)
				else return binarySearch(mid + 1, right)
			}
			return -1
		}
		const indexTarget = binarySearch(0, nums.length - 1)
		if (indexTarget >= 0) {
			const output: Array<number> = [indexTarget]
			let [leftIndexTarget, rightIndexTarget] = [indexTarget - 1, indexTarget + 1]
			while (nums[leftIndexTarget] === target) {
				output.push(leftIndexTarget--)
			}
			while (nums[rightIndexTarget] === target) {
				output.push(rightIndexTarget++)
			}
			return output.sort((a, b) => a - b)
		}
		return []
	}
	/**
	 * Number: 287
	 * findDuplicate: https://leetcode.com/problems/find-the-duplicate-number/
	 */
	public findDuplicate(nums: number[]): number {
		let low = 1,
			high = nums.length - 1
		let duplicate = -1
		while (low <= high) {
			const cur = Math.floor((low + high) / 2)
			let count = 0
			for (const num of nums) {
				if (num <= cur) count++
			}
			if (count > cur) {
				duplicate = cur
				high = cur - 1
			} else {
				low = cur + 1
			}
		}
		return duplicate
	}
}
class Question {
	static sumMonthEachItem(): number[] {
		const listMonth: any = [
			{ Jan: 0, Mar: 1, Apr: 5, May: 2 },
			{ Jan: 2, Mar: 3, Apr: 6, May: 3 },
			{ Jan: 3, Mar: 4, Apr: 7, May: 4 },
		]
		const hmKeys: { [key: string]: number } = {}
		for (const item of listMonth) {
			const itemKeys: string[] = Object.keys(item)
			itemKeys.forEach((key) => {
				if (key in hmKeys) hmKeys[key] += item[key]
				else hmKeys[key] = item[key]
			})
		}
		return Object.values(hmKeys)
	}
}
function main() {
	// const groupBS: BinarySearch = new BinarySearch()
	// console.log('Answer 2089: ', groupBS.targetIndices([1, 2, 5, 2, 3], 2))
	// console.log('ANswer 287: ', groupBS.findDuplicate([1, 3, 4, 2, 4]))
	
	console.log(Question.sumMonthEachItem())
}
main()
