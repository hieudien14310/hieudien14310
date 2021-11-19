/**
 * https://leetcode.com/problems/add-strings/
 * Cộng 2 số nguyên dương rất rất lớn.
 * Ý tưởng: Chuyển số về dạng string. Sau đó cộng từng ký tự số lại. Và tính theo công thức.
 * 
 */
function addStrings(num1: string, num2: string): string {
    // Kiểm tra độ dài 2 biến.
    // Và làm cho độ dài của 2 biến num1 và num2 là bằng nhau.
    if(num1.length > num2.length) num2 = num2.padStart(num1.length, "0");
    else num1 = num1.padStart(num2.length, "0");

    // Tạo ra 1 mảng có độ dài lớn hơn độ dài của biến lớn nhất. 
    // Cộng thêm 1 là để trường hợp 2 ký tự đầu tiên của 2 số cộng lại lớn hơn 10.
    // Ví dụ : 9 + 1 = 10
    var result = new Array(num1.length+1).fill(0);
    
    for(let i = result.length - 1, j = num1.length - 1; j >= 0; i--, j--){
        let k = parseInt(num1[j]) + parseInt(num2[j]) + parseInt(result[i]);
        if(k >= 10) {
            result[i-1] = 1;
            k %= 10; 
        } 
        result[i] = k;
    }
    // Loại bỏ giá trị 0 đứng đầu tiên.
    if(result[0] === 0) result.shift();
    return result.join("");
};
console.log(addStrings('9', '1'));
