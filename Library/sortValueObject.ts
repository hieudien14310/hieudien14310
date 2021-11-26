/**
 * Sắp xếp tăng dần (giảm dần) theo giá trị của thuộc tính (key) theo giá trị (value)
 * Điều kiện: key của object phải là string. Nếu là number thì ko thể sort được.
 * Cách làm: Chuyển object về thành 1 array 2 chiều. Rồi dựa vào phần tử có index là 1 trong mỗi phần tử của array con để sắp xếp.
 */
function sortValueOfObject(list: { [key: string]: number } = {}, ascending: boolean = false): any {
	const toArray: any[] = Object.entries(list)
	toArray.sort((a, b) => {
		if (ascending) {
			return a[1] - b[1]
		} else {
			return b[1] - a[1]
		}
	})
	return Object.fromEntries(toArray)
}
let list = {
	counter: 100,
	height: 75,
	weight: 116,
	small: 15,
}
list = sortValueOfObject(list, true)
console.log(list)
