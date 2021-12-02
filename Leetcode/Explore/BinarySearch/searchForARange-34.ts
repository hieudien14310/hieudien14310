/**
 * https://leetcode.com/explore/learn/card/binary-search/135/template-iii/944/
 *
 * @param nums
 * @param target
 */
function searchRange(nums: number[], target: number): number[] {
	const left = findLeft(nums, target)
	// if target doesn't exist
	if (nums[left] !== target) return [-1, -1]

	const right = findRight(nums, target)
	return [left, right]
}
function findLeft(nums: number[], target: number): number {
	let left = 0,
		right = nums.length - 1
	while (left <= right) {
		const mid = Math.floor((left + right) / 2)
		if (nums[mid] >= target) right = mid - 1
		else left = mid + 1
	}
	return left
}
function findRight(nums: number[], target: number): number {
	let left = 0,
		right = nums.length - 1
	while (left <= right) {
		const mid = Math.floor((left + right) / 2)
		if (nums[mid] <= target) left = mid + 1
		else right = mid - 1
	}
	return right
}
console.log(searchRange([5, 7, 7, 8, 8, 8, 8, 10], 8))
