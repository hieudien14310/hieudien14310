/**
 * https://leetcode.com/problems/di-string-match/
 * Giải thích đề: Cho 1 chuỗi chỉ chứa 2 ký tự là I và D.
 *  - Nếu gặp I thì push vào mảng vị trí bắt đầu của I và tăng dần giá trị nếu gặp I kế tiếp.
 *  - Nếu gặp D thì push vào mảng độ dài của chuỗi và giảm dần giá trị nếu gặp D kế tiếp.
 *  Ví dụ: IDID.
 *  - s[0] === I. Push 0 vào mảng. Kết quả [0];
 *  - s[1] === D. Push 4 vào mảng. Kết quả [0,4];
 *  - s[2] === I. Vì đã gặp I trước đó nên sẽ tăng lên 1 đơn vị. Push 1 vào mảng. Kết quả [0,4,1];
 *  - s[3] === D. Vì đã gặp D trước đó nên sẽ giảm đi 1 đơn vị. Push 3 vào mảng. Kết quả [0,4,1,3];
 *  - Lặp lại cho đến khi nào 2 con số tăng dần theo I === con số giảm dần theo D thì dừng và push số đó vào.
 * 
 */
function diStringMatch(s: string): number[] {
    const result: number[] = [];
    let start = 0;
    let end = s.length;
    for (let i = 0; i < s.length; i++) {
        if(s[i] === 'I'){
            result.push(start);
            start++;
        }else {
            result.push(end);
            end--;
        }
        if(start === end){
            result.push(end);
            break;
        }
    }
    return result;
};
console.log(diStringMatch('DDI'));
