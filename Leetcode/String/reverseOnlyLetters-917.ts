/**
 * https://leetcode.com/problems/reverse-only-letters/
 * 
 */
function reverseOnlyLetters(s: string): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const nonAlphabet: any[] = [];
    let result: string[] = [];
    for (let i = 1; i <= s.length; i++) {
        if(alphabet.includes(s[s.length - i].toLowerCase())){
            result.push(s[s.length - i]);
        }else {
            nonAlphabet.unshift([s.length - i, s[s.length - i]]);
        }
    }
    for (let j = 0; j < nonAlphabet.length; j++) {
        result.splice(nonAlphabet[j][0], 0, nonAlphabet[j][1]);
    }
    return result.join('');
};
console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!'));
