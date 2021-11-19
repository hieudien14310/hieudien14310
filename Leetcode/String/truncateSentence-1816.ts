/**
 * https://leetcode.com/problems/truncate-sentence/
 * 
 */
function truncateSentence(s: string, k: number): string {
    return s.split(' ').slice(0, k).join(' ');
};
console.log(truncateSentence('chopper is not a tanuki', 5));
