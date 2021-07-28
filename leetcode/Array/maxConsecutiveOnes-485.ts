/**
 * https://leetcode.com/problems/max-consecutive-ones/
 *
 */
function findMaxConsecutiveOnes(nums: number[]): number {
	const num1 = nums.join('').split('0')
	const max = []
	for (let i = 0; i < num1.length; i++) {
		max.push(num1[i].length)
	}
	return Math.max(...max)
}
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]))
