/**
 * https://leetcode.com/problems/valid-anagram/
 * Chuyển chuỗi sang array rồi sort sau đó so sánh.
 */
function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;
    return s.split("").sort().join("") == t.split("").sort().join("")
};
console.log(isAnagram('ac', 'bb'));
