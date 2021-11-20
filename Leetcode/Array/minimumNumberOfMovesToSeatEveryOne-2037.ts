/**
 * https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/
 * Di chuyển từng học sinh tới từng chiếc ghế sao cho tổng số bước di chuyển là nhỏ nhất.
 * Điều kiện: Số ghế luôn luôn bằng với số học sinh.
 * @param seats
 * @param students
 */
function minMovesToSeat(seats: number[], students: number[]): number {
	let total = 0
	seats.sort((a, b) => b - a)
	students.sort((a, b) => b - a)
	for (let i = 0; i < seats.length; i++) {
		total += Math.abs(seats[i] - students[i])
	}
	return total
}
console.log(`minMovesToSeat`, minMovesToSeat([12, 14, 19, 19, 12], [19, 2, 17, 20, 7]))
