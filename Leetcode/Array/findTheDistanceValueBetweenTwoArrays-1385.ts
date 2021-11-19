/**
 * https://leetcode.com/problems/find-the-distance-value-between-two-arrays/
 *
 */
function findTheDistanceValue(
	arr1: number[],
	arr2: number[],
	d: number,
): number {
	let ans: number = 0
	for (let i = 0; i < arr1.length; i++) {
		const element: number = arr1[i]
		let valid: boolean = true
		for (let j = 0; j < arr2.length; j++) {
			const element2 = arr2[j]
			if (Math.abs(element - element2) <= d) {
				valid = false
				break
			}
		}
		if (valid) ans++
	}
	return ans
}
console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6))
