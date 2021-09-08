/**
 * Lưu ý: Tất cả những hàm sort dưới đây điều là sort theo tăng dân.
 */

/**
 * Thuật toán sắp xếp bubble sort
 * Độ phức tạp: O(n^2)
 * @param arr
 */
const bubbleSort = (arr: number[]) => {
	const listN = [...arr]
	for (let i = 0; i < listN.length; i++) {
		for (let j = i + 1; j < listN.length; j++) {
			if (listN[i] > listN[j]) {
				const tmp = listN[i]
				listN[i] = listN[j]
				listN[j] = tmp
			}
		}
	}
	console.log('bubble sort: ', listN)
}
/**
 * Thuật toán sắp xết merge sort
 * Độ phức tạp: O(n logn)
 * @param arr
 */
const mergeSort = (arr: number[]) => {
	const listN = [...arr]
	const merge = (
		arr: number[],
		left: number,
		middle: number,
		right: number,
	) => {
		let n1 = middle - left + 1
		let n2 = right - middle
		// Create Temp arrays
		const L = new Array(n1)
		const R = new Array(n2)
		// Copy data to temp arrays L[] and R[]
		for (let i = 0; i < n1; i++) L[i] = arr[left + i]
		for (let j = 0; j < n2; j++) R[j] = arr[middle + 1 + j]

		/**
		 * the firstIndex is index of first subarray
		 * secondIndex is index of second subarray
		 * k is index of merged subarray
		 */
		let firstIndex = 0,
			secondIndex = 0,
			k = left
		while (firstIndex < n1 && secondIndex < n2) {
			if (L[firstIndex] <= R[secondIndex]) {
				arr[k] = L[firstIndex]
				firstIndex++
			} else {
				arr[k] = R[secondIndex]
				secondIndex++
			}
			k++
		}
		// Copy the remaining elements of
		// L[], if there are any
		while (firstIndex < n1) {
			arr[k] = L[firstIndex]
			firstIndex++
			k++
		}
		// Copy the remaining elements of
		// R[], if there are any
		while (secondIndex < n2) {
			arr[k] = R[secondIndex]
			secondIndex++
			k++
		}
	}
	const Divide = (arr: number[], left: number, right: number) => {
		if (left >= right) return
		const middle = Math.floor(left + (right - left) / 2)
		Divide(arr, left, middle)
		Divide(arr, middle + 1, right)
		merge(arr, left, middle, right)
	}
	Divide(listN, 0, listN.length - 1)
	console.log('merge sort: ', listN)
}
function executeAllSorting(): void {
	const numbs = [7, 6, 8, 9, 4, 3, 2, 5, 7]
	bubbleSort(numbs)
	mergeSort(numbs)
}

executeAllSorting()
