"use strict";
/**
 * https://leetcode.com/problems/reverse-string-ii/
 * Ý tưởng: Cắt 1 đoạn ký tự có độ dài theo giá trị key, rồi đảo ngược và cũng bỏ qua 1 đoạn ký tự kế tiếp
 * có độ dài bằng đoạn cắt trước đó, rồi nối lại với nhau.
 */
function reverseStr(strs, key) {
    const arrStrs = strs.split('');
    let result = '';
    for (let i = 0; i < arrStrs.length; i += 2 * key) {
        const subString = strs.substr(i, key);
        const reverseSubString = subString.split('').reverse().join('');
        const subString2 = strs.substr(i + key, key);
        result += (reverseSubString + subString2);
    }
    return result;
}
;
console.log("result: ", reverseStr("abcdef", 3));
