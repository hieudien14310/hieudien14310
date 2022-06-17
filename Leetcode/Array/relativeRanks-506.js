"use strict";
/**
 * https://leetcode.com/problems/relative-ranks/
 * Tìm thứ tự xếp hạng của các con số.
 * Cách giải:
 *  - Tạo ra 1 mảng được sắp xếp theo thứ tự giảm dần(hoặc tăng dần) dựa trên mảng ban đầu
 *  - Sau đó đánh dấu key-value(ở đây là số trong mảng - xếp hạng) cho các thứ tự theo xếp hạng.
 *  - Sau đó dùng thứ tự số của mảng ban đầu để cho ra mảng mới với xếp hạng phù hợp.
 */
function findRelativeRanks(score) {
    const answer = [];
    const sortScore = [...score].sort((a, b) => b - a);
    const hmScore = {};
    for (let i = 0; i < sortScore.length; i++) {
        if (i === 0)
            hmScore[sortScore[i]] = 'Gold Medal';
        else if (i === 1)
            hmScore[sortScore[i]] = 'Silver Medal';
        else if (i === 2)
            hmScore[sortScore[i]] = 'Bronze Medal';
        else
            hmScore[sortScore[i]] = `${i + 1}`;
    }
    for (let j = 0; j < score.length; j++) {
        answer.push(hmScore[score[j]]);
    }
    return answer;
}
console.log(findRelativeRanks([10, 3, 8, 9, 4]));
