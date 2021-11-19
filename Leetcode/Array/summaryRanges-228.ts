/**
 * https://leetcode.com/problems/summary-ranges/
 *  Tìm các khoảng liên tiếp nhau.
 */
function summaryRanges(nums: number[]): string[] {
	let i = 0,
		res = []
	for (let j = 0; j < nums.length; j++) {
		if (nums[j] + 1 === nums[j + 1]) continue
		else {
			if (i === j) res.push(nums[i] + '')
			else res.push(nums[i] + '->' + nums[j])
			i = j + 1
		}
	}
	return res
}
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]))
