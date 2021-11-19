/**
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 *
 */
function intersect(nums1: number[], nums2: number[]): number[] {
	const result: number[] = []
	const hmNums1: { [key: number]: number } = {}
	for (let i = 0; i < nums1.length; i++) {
		if (nums1[i] in hmNums1) hmNums1[nums1[i]]++
		else hmNums1[nums1[i]] = 1
	}
	for (let k = 0; k < nums2.length; k++) {
		const element = nums2[k]
		if (hmNums1[element]) {
			result.push(element)
			hmNums1[element]--
		}
	}
	return result
}
console.log(intersect([1, 2, 2, 2, 1], [2, 2, 2, 2]))
