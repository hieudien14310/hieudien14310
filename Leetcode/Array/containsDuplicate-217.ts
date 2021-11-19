/**
 * https://leetcode.com/problems/contains-duplicate/
 */
function containsDuplicate(nums: number[]): boolean {
	let isDup: boolean = false
	const setNums: Set<number> = new Set()
	for (let i = 0; i < nums.length; i++) {
		if (setNums.has(nums[i])) {
			isDup = true
			break
		} else setNums.add(nums[i])
	}
	return isDup
}
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
