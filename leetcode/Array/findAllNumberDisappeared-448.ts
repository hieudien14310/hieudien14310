/**
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */
function findDisappearedNumbers(nums: number[]): number[] {
	const result: { [key: number]: number } = {}
	for (let i = 1; i <= nums.length; i++) {
		result[i] = 1
	}
	const setNums = Array.from(new Set(nums))
	for (let i = 0; i < setNums.length; i++) {
		const element = setNums[i]
		if (result[element]) delete result[element]
	}
	return Object.keys(result).map((i) => parseInt(i))
}
console.log(findDisappearedNumbers([1, 1]))
