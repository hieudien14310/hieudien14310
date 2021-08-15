/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/discuss/1167361/JavaScript-Simple-Binary-Search
 *
 */
function findMin(nums: number[]): number {
	let left = 0,
		right = nums.length - 1
	while (left < right) {
		const mid = Math.floor((left + right) / 2)
		if (nums[mid] > nums[right]) left = mid + 1
		else right = mid
	}
	return nums[right]
}
console.log(findMin([3, 4, 5, 6, 1, 2]))
