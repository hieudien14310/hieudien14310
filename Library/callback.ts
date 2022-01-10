/**
 * Callback là gì?
 * Đầu tiên phải hiểu là trong Javascript, function được coi là 1 object
 * => có thể truyền 1 function cho 1 function khác dưới dạng là tham số.
 * Và rồi function nhận function khác làm tham số sẽ thực thi cái function đc truyền vào
 * Thì đó được gọi là callback.
 * Ví dụ: Hàm printSum đc truyền vào hàm sum dưới dạng tham số.
 * Sau đó trong hàm sum thì thực thi hàm callback(chính là printSum)
 *
 */
function printSum(sum: number, num1: number, callback2: any) {
	console.log('sum: ', sum)
	callback2(num1)
}
function sum(num1: number, num2: number, callback: any, callback2: any) {
	const sum = num1 + num2
	callback(sum, num1, callback2)
}
function main() {
	const a: number = 20
	const b: number = 50
	sum(a, b, printSum, (a: number) => {
		console.log('Numb1:', a)
	})
}
main()
