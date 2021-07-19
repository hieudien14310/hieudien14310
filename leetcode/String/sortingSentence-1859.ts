/**
 * https://leetcode.com/problems/sorting-the-sentence/
 * Ý tưởng: Đảo ngược các từ để  số lên đứng trước, rồi sau đó sort theo tăng dần. 
 *  Tiếp tục đảo ngược từ 1 lần nữa và bỏ đi số.
 */
 function sortSentence(s: string): string {
    const arrS = s.split(' ').map(char => char.split('').reverse().join('')).sort();
    const result: string[] = [];
    for (let i = 0; i < arrS.length; i++) {
        const reverseStrs = arrS[i].split('').reverse();
        const _s = reverseStrs.slice(0, reverseStrs.length - 1).join('');
        result.push(_s);
    }
    return result.join(' ');
};
console.log(sortSentence('Myself2 Me1 I4 and3'));
