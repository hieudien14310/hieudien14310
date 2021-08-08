/**
 * https://leetcode.com/problems/binary-search/
 *
 */
function search(nums: number[], target: number): number {
	const binarySeach = (
		arr: number[],
		left: number,
		right: number,
		x: number,
	): number => {
		if (right >= left) {
			const middle = Math.floor((left + right) / 2)
			if (arr[middle] === x) return middle
			if (arr[middle] > x) return binarySeach(arr, left, middle - 1, x)
			else return binarySeach(arr, middle + 1, right, x)
		}
		return -1
	}
	return binarySeach(nums, 0, nums.length, target)
}
console.log(search([-1, 0, 3, 5, 9, 12], 9))
