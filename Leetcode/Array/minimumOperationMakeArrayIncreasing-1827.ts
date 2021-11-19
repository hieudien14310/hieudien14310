/**
 * https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/
 *
 */
function minOperations(nums: number[]): number {
	if (nums.length === 1) return 0
	let count: number = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i + 1] <= nums[i]) {
			let result = nums[i] - nums[i + 1] + 1
			nums[i + 1] = nums[i + 1] + result
			count += result
		}
	}
	return count
}
console.log(minOperations([1, 5, 2, 4, 1]))
