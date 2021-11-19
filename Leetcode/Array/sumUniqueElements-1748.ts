/**
 * https://leetcode.com/problems/sum-of-unique-elements/
 *
 */
function sumOfUnique(nums: number[]): number {
	let sum: number = 0
	const mapNum: { [key: number]: number } = {}
	for (let i = 0; i < nums.length; i++) {
		if (!mapNum[nums[i]]) {
			mapNum[nums[i]] = 1
		} else {
			mapNum[nums[i]]++
		}
	}
	Object.keys(mapNum).forEach((ele) => {
		if (mapNum[parseInt(ele)] === 1) sum += parseInt(ele)
	})
	return sum
}
console.log(sumOfUnique([1, 2, 3, 4, 5]))
