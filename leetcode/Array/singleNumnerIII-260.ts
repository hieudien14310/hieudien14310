/**
 * https://leetcode.com/problems/single-number-iii/
 */
function singleNumber(nums: number[]): number[] {
	const hmNums: { [key: string]: any } = {}
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] in hmNums) hmNums[nums[i]]++
		else hmNums[nums[i]] = 1
	}
	const result: number[] = []
	Object.keys(hmNums).forEach((key) => {
		if (hmNums[key] === 1) result.push(parseInt(key))
	})
	return result
}
console.log(singleNumber([1, 0]))
