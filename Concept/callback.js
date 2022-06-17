"use strict";
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
function printSum(sum, num1, callback2) {
    console.log('sum: ', sum);
    callback2(num1);
}
function sum(num1, num2, callback, callback2) {
    const sum = num1 + num2;
    callback(sum, num1, callback2);
}
function main() {
    const a = 20;
    const b = 50;
    sum(a, b, printSum, (a) => {
        console.log('Numb1:', a);
    });
}
main();
