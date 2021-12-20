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
}
function main() {
	const groupBS: BinarySearch = new BinarySearch()
	console.log('Answer 2089: ', groupBS.targetIndices([1, 2, 5, 2, 3], 2))
}
main()
