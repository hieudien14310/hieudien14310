/**
 * https://leetcode.com/problems/number-of-longest-increasing-subsequence/
 * Quy hoạch động
 */
function findNumberOfLIS(nums: number[]): number {
	const lis = new Array(nums.length).fill(1)
	const counts = new Array(nums.length).fill(1)

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				if (lis[i] < lis[j] + 1) {
					lis[i] = lis[j] + 1
					counts[i] = counts[j]
				} else if (lis[j] + 1 === lis[i]) {
					counts[i] += counts[j]
				}
			}
		}
	}
	const maxLen = Math.max(...lis)
	let ans = 0

	for (let i = 0; i < nums.length; i++) {
		if (lis[i] == maxLen) ans += counts[i]
	}

	return ans
}
console.log(findNumberOfLIS([1, 2, 4, 3, 5, 4, 7, 2]))
