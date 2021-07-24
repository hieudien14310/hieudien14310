/**
 * https://leetcode.com/problems/teemo-attacking/
 *
 */
function findPoisonedDuration(timeSeries: number[], duration: number): number {
	let ans: number = 0
	for (let i = 0; i < timeSeries.length; i++) {
		const nextTime = timeSeries[i + 1]
		const attackEndTime = timeSeries[i] + duration
		if (nextTime && nextTime < attackEndTime)
			ans = ans + nextTime - timeSeries[i]
		else ans = ans + duration
	}
	return ans
}
console.log(findPoisonedDuration([1, 3], 3))
