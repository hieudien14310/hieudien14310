/**
 * https://leetcode.com/problems/sort-array-by-increasing-frequency/
 *
 */
function frequencySort(nums: number[]): number[] {
	const hmNums: { [key: number]: number } = {}
	for (let i = 0; i < nums.length; i++) {
		const element = nums[i]
		if (element in hmNums) hmNums[element]++
		else hmNums[element] = 1
	}
	const sortNums = Object.entries(hmNums)
		.sort((a, b) => a[1] - b[1])
		.map((a) => [parseInt(a[0]), a[1]])
	for (let k = 0; k < sortNums.length; k++) {
		for (let h = k + 1; h < sortNums.length; h++) {
			if (sortNums[k][1] === sortNums[h][1]) {
				if (sortNums[k][0] < sortNums[h][0]) {
					let tmp = sortNums[k]
					sortNums[k] = sortNums[h]
					sortNums[h] = tmp
				}
			}
		}
	}
	const ans: number[] = []
	for (let i = 0; i < sortNums.length; i++) {
		const element = sortNums[i]
		for (let z = 0; z < element[1]; z++) {
			ans.push(element[0])
		}
	}
	return ans
}
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]))
