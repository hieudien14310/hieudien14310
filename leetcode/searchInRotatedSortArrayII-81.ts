/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 *
 */
function searchRotatedII(nums: number[], target: number): boolean {
	for (let i = 0; i < nums.length; i++) {
		const element = nums[i]
		if (element === target) return true
	}
	return false
}
console.log(searchRotatedII([2, 5, 6, 0, 0, 1, 2], 0))
