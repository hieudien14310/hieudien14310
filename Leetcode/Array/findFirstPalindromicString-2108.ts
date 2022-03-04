/**
 * https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
 * @param words 
 */
function firstPalindrome(words: string[]): string {
    for (const word of words) {
        let reverseWord = ''
        for (let i = word.length - 1; i >= 0 ; i--) {
            reverseWord += word[i]
        }
        if(word === reverseWord) return word
    }
    return '';
};
console.log(firstPalindrome(["def","ghi"]));
