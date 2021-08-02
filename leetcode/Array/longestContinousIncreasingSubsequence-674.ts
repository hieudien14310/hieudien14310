/**
 * https://leetcode.com/problems/longest-continuous-increasing-subsequence/
 * Tìm dãy số liên tiếp có độ dài lớn nhất.
 */
function findLengthOfLCIS(nums: number[]): number {
	let [longest, j]: number[] = [0, 0]
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < nums[i + 1]) continue
		else {
			longest = Math.max(longest, i - j)
			j = i + 1
		}
	}
	return longest + 1
}
console.log(findLengthOfLCIS([1, 3, 5, 7, 5, 6, 7, 8, 9, 10]))
