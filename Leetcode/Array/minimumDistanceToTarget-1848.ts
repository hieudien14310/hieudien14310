/**
 * https://leetcode.com/problems/minimum-distance-to-the-target-element/
 *
 */
function getMinDistance(nums: number[], target: number, start: number): number {
	let ans: number = nums.length
	for (let i = 0; i < nums.length; i++) {
		const element = nums[i]
		if (element === target) {
			if (ans > Math.abs(i - start)) {
				ans = Math.abs(i - start)
			}
		}
	}
	return ans
}
console.log(getMinDistance([1, 2, 3, 4, 5], 5, 3))
