/**
 * https://leetcode.com/problems/sign-of-the-product-of-an-array/
 *
 */
function arraySign(nums: number[]): number {
	let negative = 0
	for (let i = 0; i < nums.length; i++) {
		const element = nums[i]
		if (element === 0) return 0
		if (element <= -1) negative++
	}
	if (negative % 2 === 0) return 1
	return -1
}
console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]))
