/**
 * https://leetcode.com/problems/count-items-matching-a-rule/
 * Tìm số lượng kết quả hợp với điều kiện theo ruleKey và ruleValue.
 * Ý tưởng: 
 *  ---Dùng key để tìm ra chỉ số index.
 *  ---Sau đó dựa vào index để filter items theo value.
 * 
 */

function countMatches(items: any[][], key: string, value: string): number {
    let index: number;
    switch (key) {
        case 'type':
            index = 0
            break;
        case 'color':
            index = 1;
            break;
        default:
            index = 2;
            break;
    }
    const result = items.filter(i => i[index] === value);
    console.log(result);
    
    return result.length;
}

const items = [
    ["phone","blue","pixel"],
    ["computer","silver","lenovo"],
    ["phone","silver","iphone"]
]
const ruleKey = "color"
const ruleValue = "silver"
console.log(countMatches(items, ruleKey, ruleValue));