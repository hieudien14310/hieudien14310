/**
 * https://leetcode.com/problems/reverse-integer/
 * Cho 1 số nguyên và đảo ngược số nguyên đó. Nếu số nguyên đã cho phải nằm trong khoảng [-2**31, 2**31 -1] nếu không nằm trong thì trả về 0.
 * Cách làm: 
 *      B1: Convert số thành chuỗi, sau đó cắt từng ký tự số thành array => Dùng split().
 *      B2: Sau đó đảo ngược cái array => Dùng reverse(). Hoặc là viết vòng for để tự đạo ngược.
 *      B3: Đảo ngược xong thì nối lại thành 1 chuỗi => Dùng join(''). Hoặc trong vòng for tự nối chuỗi.
 *      B4: Chuyển chuỗi đã được đạo ngược thành kiểu số => Dùng parseInt(). 
 *      B5: Kiểm tra số nguyên đã cho là âm hay dương => Dùng Math.sign().
 *      Kết quả: Lấy kết quả của B4 và B5 nhân lại với nhau là sẽ được đáp án.
 * @param x 
 * @returns 
 */
function reverseInteger(x: number) {
    const stringX: string = x.toString();
    let reverseString: string = '';
    for (let index = 1; index <= stringX.length; index++) {
        reverseString += stringX[stringX.length - index];
    }
    const convertNumber: number = parseInt(reverseString);
    if(convertNumber > 2**31) return 0;
    const result: number = convertNumber * Math.sign(x);
    console.log(result);
    return result;
}
reverseInteger(-2147);