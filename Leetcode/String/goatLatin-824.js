"use strict";
/**
 * https://leetcode.com/problems/goat-latin/
 *
 */
function toGoatLatin(sentence) {
    let eachWords = sentence.split(' ');
    const arrNewString = [], vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let i = 0; i < eachWords.length; i++) {
        let _s = '';
        if (vowels.includes(eachWords[i][0])) {
            _s = `${eachWords[i]}ma`;
        }
        else {
            const firstLetter = eachWords[i][0];
            _s = eachWords[i].slice(i) + firstLetter + 'ma';
        }
        _s = _s.padEnd(_s.length + i + 1, 'a');
        arrNewString.push(_s);
    }
    return arrNewString.join(' ');
}
;
console.log(toGoatLatin('I speak Goat Latin'));
