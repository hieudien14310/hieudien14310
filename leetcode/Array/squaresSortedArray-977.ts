/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 *
 */
function sortedSquares(nums: number[]): number[] {
	return nums.map((num) => num ** 2).sort((a, b) => a - b)
}
console.log(sortedSquares([-7, -3, 2, 3, 11]))
