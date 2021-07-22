/**
 * https://leetcode.com/problems/contains-duplicate/
 */
function containsDuplicate(nums: number[]): boolean {
	let isDup: boolean = false
	const hmNums: { [key: number]: number } = {}
	for (let i = 0; i < nums.length; i++) {
		if (hmNums[nums[i]]) isDup = true
		else hmNums[nums[i]] = 1
	}
	return isDup
}
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
