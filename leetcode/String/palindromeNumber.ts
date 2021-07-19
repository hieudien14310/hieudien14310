/**
 * https://leetcode.com/problems/palindrome-number/
 * Cho 1 số nguyên. Kiểm tra số đó có phải là số palindrome không.
 * Số palindrome là số đọc từ trái qua phải bằng với đọc từ phải qua trái.
 * Ví dụ: 121 ngược lại cũng là 121. 
 *        313 ngược lại cũng là 313.
 * Cách làm: Khá giống với bài ReverseInteger.
 */
function palindromeNumber(x: number) {
    const reverseNumber = parseFloat(x.toString().split('').reverse().join(''));
    if(reverseNumber === x){
        return true;
    }
    return false;
}
console.log(palindromeNumber(22));
