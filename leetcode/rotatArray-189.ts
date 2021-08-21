/**
 * https://leetcode.com/problems/rotate-array/
 *
 */
function rotate(nums: number[], k: number): void {
	console.log(k % nums.length)
	nums.splice(0, 0, ...nums.splice(nums.length - (k % nums.length)))
	console.log(nums)
}
rotate([1, 2, 3, 4], 4)
