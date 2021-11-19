/**
 * https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
 * Tìm phần tử có số lần xuất hiện nhiều hơn 1/4 độ dài của mảng.
 */
function findSpecialInteger(arr: number[]): number {
	const quarter: number = arr.length / 4
	const hmFreq: { [key: number]: number } = {}
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i]
		if (element in hmFreq) hmFreq[element]++
		else hmFreq[element] = 1
	}
	const keys: any[] = Object.keys(hmFreq)
	for (let j = 0; j < keys.length; j++) {
		const key = keys[j]
		if (hmFreq[key] > quarter) return key
	}
	return 1
}
console.log(findSpecialInteger([1, 1]))
