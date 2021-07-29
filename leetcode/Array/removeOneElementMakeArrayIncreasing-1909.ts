/**
 * https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/
 *
 */
function canBeIncreasing(nums: number[]): boolean {
	for (let i = 0; i < nums.length; i++) {
		const cloneN: number[] = [...nums]
		cloneN.splice(i, 1)
		let isIncresing: boolean = true
		for (let j = 0; j < cloneN.length; j++) {
			if (cloneN[j] >= cloneN[j + 1]) {
				isIncresing = false
				break
			}
		}
		if (isIncresing) return true
	}
	return false
}
console.log(canBeIncreasing([1, 2, 10, 5, 7]))
