/**
 *
 */
function findClosestElements(arr: number[], k: number, x: number) {
	let left: number = 0,
		right: number = arr.length - 1
	while (left < right) {
		const mid: number = Math.floor((left + right) / 2)
		if (x - arr[mid] > arr[k + mid] - x) {
			left = mid + 1
		} else right = mid
	}
	return arr.slice(left, left + k)
}
console.log(findClosestElements([1, 2, 3, 4, 5, 6], 4, 3))
