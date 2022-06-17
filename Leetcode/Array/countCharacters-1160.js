"use strict";
/**
 * https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
 *
 * @param words
 * @param chars
 */
function countCharacters(words, chars) {
    const countChar = (data) => {
        const counter = {};
        for (const c of data) {
            if (c in counter)
                counter[c] = counter[c] + 1;
            else
                counter[c] = 1;
        }
        return counter;
    };
    const counterChars = countChar(chars);
    let sum = 0;
    words.forEach((word) => {
        const counterWord = countChar(word);
        let isValid = true;
        for (const w of word) {
            if (!counterChars[w]) {
                isValid = false;
                break;
            }
            if (counterChars[w] < counterWord[w]) {
                isValid = false;
                break;
            }
        }
        if (isValid)
            sum += word.length;
    });
    return sum;
}
console.log('countCharacters', countCharacters([
    'dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin',
    'ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb',
    'ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl',
    'boygirdlggnh',
    'xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx',
    'nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop',
    'hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx',
    'juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr',
    'lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo',
    'oxgaskztzroxuntiwlfyufddl',
    'tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp',
    'qnagrpfzlyrouolqquytwnwnsqnmuzphne',
    'eeilfdaookieawrrbvtnqfzcricvhpiv',
    'sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz',
    'yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue',
    'hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv',
    'cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo',
    'teyygdmmyadppuopvqdodaczob',
    'qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs',
    'qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs',
], 'usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp'));
console.log('countCharacters', countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr'));
