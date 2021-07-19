/**
 * https://leetcode.com/problems/reverse-string/
 */
function reverseString(strs: string[]): void {
    let left = 0,
        right = strs.length - 1;
        while (left < right) {
            const tmp = strs[left];
            strs[left++] = strs[right]
            strs[right--] = tmp;
        }
};

reverseString(["h","e","l","l","o"]);