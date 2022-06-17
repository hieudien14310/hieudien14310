"use strict";
/**
 * https://leetcode.com/problems/find-the-town-judge/
 * Tìm 1 con số trong các cặp số thỏa mãn điều kiện sau:
 *  - 1 con số không tin tưởng bất kỳ con số nào cả.
 *  - Tất cả các con số điều tin tưởng con số ở đk 1
 *  - Chỉ có duy nhất 1 con số hợp 2 đk trên.
 */
function findJudge(n, trust) {
    if (n === 1)
        return 1;
    const setTrusts = new Set();
    const hmJudge = {};
    for (let i = 0; i < trust.length; i++) {
        setTrusts.add(trust[i][0]);
        if (trust[i][1] in hmJudge)
            hmJudge[trust[i][1]]++;
        else
            hmJudge[trust[i][1]] = 1;
    }
    let judge = -1;
    Object.keys(hmJudge).forEach((key) => {
        if (hmJudge[parseInt(key)] == n - 1 && !setTrusts.has(parseInt(key))) {
            judge = parseInt(key);
        }
    });
    return judge;
}
console.log(findJudge(2, [[1, 2]]));
