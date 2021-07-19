/**
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 * 
 */
function reverseWords(strs: string): string {
    let result: string[] = [];
    const arrStrs: string[] = strs.split(' ');
    for (let i = 0; i < arrStrs.length; i++) {
        const _s = arrStrs[i].split('').reverse().join('');
        result.push(_s);
    }
    return result.join(' ');
};
console.log(reverseWords('Let\'s take LeetCode contest'));
