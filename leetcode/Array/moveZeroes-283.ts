/**
 * https://leetcode.com/problems/move-zeroes/
 *
 */
function moveZeroes(nums: number[]): void {
	let index = 0,
		length = nums.length
	for (let i = 0; i < length; i++) {
		if (nums[index] === 0) {
			nums.splice(index, 1)
			nums.push(0)
		} else index++
	}
}
moveZeroes([0, 0, 0, 1, 0, 2, 3, 4, 5])
