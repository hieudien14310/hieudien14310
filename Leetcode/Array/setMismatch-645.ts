/**
 * https://leetcode.com/problems/set-mismatch/
 */
function findErrorNums(nums: number[]): number[] {
	const hmA: { [key: number]: number } = {}
	let dup = -1,
		missing = 1
	for (let i = 0; i < nums.length; i++) {
		const element = nums[i]
		if (element in hmA) hmA[element]++
		else hmA[element] = 1
	}
	for (let j = 1; j <= nums.length; j++) {
		if (hmA[j]) {
			if (hmA[j] === 2) dup = j
		} else missing = j
	}

	return [dup, missing]
}
console.log(findErrorNums([1, 2, 2, 4]))
