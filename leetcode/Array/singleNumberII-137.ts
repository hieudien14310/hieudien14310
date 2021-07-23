/**
 * https://leetcode.com/problems/single-number-ii/
 */
function singleNumber(nums: number[]): number {
	const hmNums: { [key: number]: number } = {}
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] in hmNums) hmNums[nums[i]]++
		else hmNums[nums[i]] = 1
	}
	let result: number = 0
	Object.keys(hmNums)
		.map((i) => parseInt(i))
		.forEach((key) => {
			if (hmNums[key] === 1) result = key
		})
	return result
}
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]))
