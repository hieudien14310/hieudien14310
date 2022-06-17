"use strict";
/**
 * https://leetcode.com/problems/to-lower-case/
 *
 */
function toLowerCase(strs) {
    let result = '';
    const _mappingCharactersLowerCase = {
        "A": 'a',
        "B": 'b',
        "C": 'c',
        "D": 'd',
        "E": 'e',
        "F": 'f',
        "G": 'g',
        "H": 'h',
        "I": 'i',
        "J": 'j',
        "K": 'k',
        "L": 'l',
        "M": 'm',
        "N": 'n',
        "O": 'o',
        "P": 'p',
        "Q": 'q',
        "R": 'r',
        "S": 's',
        "T": 't',
        "U": 'u',
        "V": 'v',
        "W": 'w',
        "X": 'x',
        "Y": 'y',
        "Z": 'z',
    };
    for (let i = 0; i < strs.length; i++) {
        if (_mappingCharactersLowerCase[strs[i]]) {
            result += _mappingCharactersLowerCase[strs[i]];
        }
        else {
            result += strs[i];
        }
    }
    return result;
}
;
console.log(toLowerCase('hIeULUn'));
