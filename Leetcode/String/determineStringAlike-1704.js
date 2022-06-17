"use strict";
/**
 * https://leetcode.com/problems/determine-if-string-halves-are-alike/
 * Độ dài của chuỗi luôn là số chẵn.
 * Ý tưởng: Chia đôi chuỗi. Đếm số lần xuất hiện vowel của cả 2 chuỗi (sau khi chia đôi ).
 *
 */
function halvesAreAlike(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const subStr1 = s.slice(0, s.length / 2);
    const subStri2 = s.slice(s.length / 2, s.length);
    let count1 = 0, count2 = 0;
    //Vì độ dài của 2 sub string là giống nhau nên gộp 2 vòng for thành 1 for.
    for (let i = 0, j = 0; i < subStr1.length; i++, j++) {
        if (vowels.includes(subStr1[i])) {
            count1++;
        }
        if (vowels.includes(subStri2[j])) {
            count2++;
        }
    }
    // for (let i = 0; i < subStr1.length; i++) {
    //     if(vowels.includes(subStr1[i])){
    //         count1++;
    //     }
    // }
    // for (let i = 0; i < subStri2.length; i++) {
    //     if(vowels.includes(subStri2[i])){
    //         count2++;
    //     }
    // }
    return count1 === count2;
}
;
console.log(halvesAreAlike('AbCdEfGh'));
