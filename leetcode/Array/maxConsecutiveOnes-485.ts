/**
 * https://leetcode.com/problems/max-consecutive-ones/
 * Tìm độ dài liên tiếp của số 1 dài nhất trong mảng.
 */
function findMaxConsecutiveOnes(nums: number[]): number {
	let count = 0,
		maxCount = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			maxCount = Math.max(maxCount, count)
			count = 0
		} else count++
	}
	return Math.max(maxCount, count)
}
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 1, 0]))
