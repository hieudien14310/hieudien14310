/**
 * https://leetcode.com/problems/intersection-of-two-arrays/
 */
function intersection(nums1: number[], nums2: number[]): number[] {
	const result: Set<number> = new Set()
	for (let i = 0; i < nums1.length; i++) {
		const element = nums1[i]
		if (nums2.includes(element)) result.add(element)
	}
	return Array.from(result)
}
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
