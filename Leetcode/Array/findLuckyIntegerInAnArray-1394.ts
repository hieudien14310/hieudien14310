/**
 * https://leetcode.com/problems/find-lucky-integer-in-an-array/
 * Tìm số có lần xuất hiện của 1 số trong mảng bằng với chính số đó.
 * Nếu có nhiều số hợp điều kiện thì lấy số lớn nhất.
 */
function findLucky(arr: number[]): number {
	let maxFreq: number = -1
	const hmFrequency: { [key: string]: number } = {}
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i]
		if (!hmFrequency[element]) hmFrequency[element] = 1
		else hmFrequency[element]++
	}
	Object.keys(hmFrequency).forEach((key) => {
		if (hmFrequency[key] === parseInt(key) && hmFrequency[key] > maxFreq)
			maxFreq = hmFrequency[key]
	})
	return maxFreq
}
console.log(findLucky([2, 3, 4, 4, 4, 4]))
