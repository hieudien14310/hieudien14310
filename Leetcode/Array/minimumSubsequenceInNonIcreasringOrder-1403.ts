/**
 * https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/
 */
function minSubsequence(nums: number[]): number[] {
	const sum = nums.reduce((a, b) => a + b, 0) / 2
	nums.sort((a, b) => b - a)
	let ans: number[] = [],
		total = 0
	for (let i = 0; i < nums.length; i++) {
		const element = nums[i]
		ans.push(element)
		total += element
		if (total > sum) break
	}
	return ans
}
console.log(minSubsequence([4, 4, 7, 6, 7]))
