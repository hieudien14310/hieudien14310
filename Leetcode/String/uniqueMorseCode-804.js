"use strict";
/**
 * https://leetcode.com/problems/unique-morse-code-words/
 * Ý tưởng: Dịch các words thành mã morse. Sau đó đưa vào Set. Trả về size của Set.
 *
 *
 */
function uniqueMorseRepresentations(words) {
    const result = new Set();
    const dictaionaryMorse = {
        'a': ".-",
        'b': "-...",
        'c': "-.-.",
        'd': "-..",
        'e': ".",
        'f': "..-.",
        'g': "--.",
        'h': "....",
        'i': "..",
        'j': ".---",
        'k': "-.-",
        'l': ".-..",
        'm': "--",
        'n': "-.",
        'o': "---",
        'p': ".--.",
        'q': "--.-",
        'r': ".-.",
        's': "...",
        't': "-",
        'u': "..-",
        'v': "...-",
        'w': ".--",
        'x': "-..-",
        'y': "-.--",
        'z': "--..",
    };
    for (let i = 0; i < words.length; i++) {
        let _s = '';
        for (let j = 0; j < words[i].length; j++) {
            _s += dictaionaryMorse[words[i][j]];
        }
        result.add(_s);
    }
    return result.size;
}
;
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
