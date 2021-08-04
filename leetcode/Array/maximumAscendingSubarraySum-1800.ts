/**
 * https://leetcode.com/problems/maximum-ascending-subarray-sum/
 */
function maxAscendingSum(nums: number[]): number {
	let sum = 0,
		total = 0
	for (let j = 0; j < nums.length; j++) {
		total += nums[j]
		if (nums[j] < nums[j + 1]) {
			continue
		} else {
			sum = Math.max(sum, total)
			total = 0
		}
	}
	return sum
}
console.log(maxAscendingSum([100, 10, 1]))
