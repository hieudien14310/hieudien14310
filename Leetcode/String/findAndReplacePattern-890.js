"use strict";
/**
 * https://leetcode.com/problems/find-and-replace-pattern/
 * Tìm các chuỗi trong mảng sao cho nó khớt với pattern
 * Ý tưởng: Dùng 2 cái map
 * Map1: X -> A
 * Map2: A -> X
 * Dựa vào 2 map để kiểm tra.
 */
function findAndReplacePattern(words, pattern) {
    const ans = [];
    const match = (word, pattern) => {
        const map1 = new Map();
        const map2 = new Map();
        for (let i = 0; i < word.length; i++) {
            const w = word[i];
            const p = pattern[i];
            if (!map1.has(w))
                map1.set(w, p);
            if (!map2.has(p))
                map2.set(p, w);
            if (map1.get(w) !== p || map2.get(p) !== w)
                return false;
        }
        return true;
    };
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (match(word, pattern)) {
            ans.push(word);
        }
    }
    return ans;
}
console.log(findAndReplacePattern(['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], 'abb'));
