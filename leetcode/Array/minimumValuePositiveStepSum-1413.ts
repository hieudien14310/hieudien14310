/**
 * https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
 *
 */
function minStartValue(nums: number[]): number {
	let miniPos = 1
	while (true) {
		let valueSum = miniPos
		for (let i = 0; i < nums.length; i++) {
			valueSum += nums[i]
			if (valueSum < 1) {
				break
			}
		}
		if (valueSum >= 1) {
			break
		}
		miniPos++
	}
	return miniPos
}
console.log(minStartValue([1, -2, -3]))
