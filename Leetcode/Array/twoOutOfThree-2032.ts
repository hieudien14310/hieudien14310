/**
 * https://leetcode.com/problems/two-out-of-three/
 * @param nums1
 * @param nums2
 * @param nums3
 */
function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
	const output: Array<number> = []
	const mixNum: Set<number> = new Set([...nums1, ...nums2, ...nums3])
	mixNum.forEach((num) => {
		let isTwoOutOfThree = 0
		if (nums1.includes(num)) isTwoOutOfThree++
		if (nums2.includes(num)) isTwoOutOfThree++
		if (nums3.includes(num)) isTwoOutOfThree++
		if (isTwoOutOfThree >= 2) output.push(num)
	})
	return output
}
console.log('twoOutOfThree', twoOutOfThree([1, 1, 3, 2], [2, 3], [3]))
console.log('twoOutOfThree', twoOutOfThree([3, 1], [2, 3], [1, 2]))
console.log('twoOutOfThree', twoOutOfThree([1, 2, 2], [4, 3, 3], [5]))
