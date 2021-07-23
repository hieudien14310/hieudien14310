/**
 * https://leetcode.com/problems/next-greater-element-ii/
 */
function nextGreaterElementsII(nums: number[]): number[] {
	const result: number[] = []
	const newNums: number[] = [...nums, ...nums]
	for (let i = 0; i < nums.length; i++) {
		let count = 0
		for (let j = i + 1; j < newNums.length; j++) {
			if (newNums[i] < newNums[j]) {
				count = 1
				result.push(newNums[j])
				break
			}
		}
		if (count === 0) result.push(-1)
	}
	return result
}
console.log(nextGreaterElementsII([1, 2, 3, 4, 3]))
