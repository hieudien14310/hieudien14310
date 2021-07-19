/**
 * https://leetcode.com/problems/remove-palindromic-subsequences/
 * 
 */
function removePalindromeSub(s: string): number {
    if(s === s.split('').reverse().join('')) return 1;
    return 2;
};
console.log(removePalindromeSub('ababa'));
