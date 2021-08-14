/**
 * https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/
 *
 */
function isPossibleDivide(nums: number[], k: number): boolean {
	nums.sort((a, b) => a - b)
	const map = new Map()

	for (const num of nums) {
		if (!map.has(num)) map.set(num, 0)
		map.set(num, map.get(num) + 1)
	}

	for (const [startNum, freq] of map) {
		for (let j = 1; j < k; j++) {
			const nextNum = startNum + j
			if (!map.has(nextNum)) return false
			map.set(nextNum, map.get(nextNum) - freq)
			if (map.get(nextNum) === 0) map.delete(nextNum)
		}
		map.delete(startNum)
	}
	return map.size === 0
}
console.log(isPossibleDivide([1, 2, 3, 3, 3, 4, 4, 5, 6], 4))
