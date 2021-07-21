/**
 * https://leetcode.com/problems/next-greater-element-i/
 */
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
	const result: number[] = []
	for (let i = 0; i < nums1.length; i++) {
		const element = nums1[i]
		const indEleNums2 = nums2.indexOf(element)
		let count = 0
		for (let j = indEleNums2 + 1; j < nums2.length; j++) {
			if (nums2[indEleNums2] < nums2[j]) {
				result.push(nums2[j])
				count = 1
				break
			}
		}
		if (count === 0) result.push(-1)
	}
	return result
}
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]))
