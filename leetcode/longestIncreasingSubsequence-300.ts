/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 *
 */
function lengthOfLIS(nums: number[]): number {
	const lis: number[] = new Array(nums.length).fill(1)

	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i] && lis[i] < lis[j] + 1) {
				lis[i] = lis[j] + 1
			}
		}
	}

	let max = 0
	for (let k = 0; k < lis.length; k++) {
		if (max <= lis[k]) max = lis[k]
	}
	return max
}
console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]))
