/**
 * https://leetcode.com/problems/missing-number/
 */
function missingNumber(nums: number[]): number {
	const hmNums: { [key: number]: number } = {}
	for (let i = 0; i < nums.length; i++) {
		hmNums[nums[i]] = 1
	}
	for (let j = 0; j <= nums.length; j++) {
		if (!hmNums[j]) return j
	}
	return 0
}
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
