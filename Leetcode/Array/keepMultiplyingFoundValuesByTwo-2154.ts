/**
 * https://leetcode.com/problems/keep-multiplying-found-values-by-two/
 * @param nums
 * @param original
 */
function findFinalValue(nums: number[], original: number): number {
	let output: number = original
	while (true) {
		if (!nums.includes(output)) return output
		output = output * 2
	}
}
console.log(findFinalValue([2, 7, 9], 4))
