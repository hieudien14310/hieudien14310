/**
 * https://leetcode.com/problems/roman-to-integer/
 * Chuyển chữ cái la mã thành số.
 * Quy ước của số la mã: 
 *      I can be placed before V (5) and X (10) to make 4 and 9. 
 *      X can be placed before L (50) and C (100) to make 40 and 90. 
 *      C can be placed before D (500) and M (1000) to make 400 and 900.
 * Cách làm:
 *  B1: Dịch từng chữ cái la mã sang số.
 *  B2: Cộng tất cả chúng lại với nhau.
 *  B3: Đi tìm các chữ cái la mã trùng với quy ước.
 *  B4: Tính số mà chữ cái hợp quy ước.
 *  B5: Lấy kết quả B2 - B4 là được kết quả mong muốn.
 */
 function romanToInt(s: string): number {
    let result: number = 0;
    const objRoman: any = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    for (let i = 0; i < s.length; i++) {
        const nextChar = s[i+1];
        if(s[i] === 'I' && (nextChar === 'V' || nextChar === 'X')){
            result -= 2;
        }
        if(s[i] === 'X' && (nextChar === 'L' || nextChar === 'C')){
            result -= 20;
        }
        if(s[i] === 'C' && (nextChar === 'D' || nextChar === 'M')){
            result -= 200;
        }
        result += objRoman[s[i]]
    }
    return result;
};
console.log(romanToInt('MCMXCIV'));
