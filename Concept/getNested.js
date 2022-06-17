"use strict";
/**
 * Hàm này dùng để  lấy thông tin của children có độ sâu là lớn nhất.
 * Giải quyết cho các bài toán có data lồng vào nhau.
 * @param level
 * @returns
 */
function flattenMap(level) {
    if (!level)
        return [];
    if (!level || !level.children || !level.children.length)
        return [[level.code, level.name]];
    const result = [];
    for (const subLevel of level.children) {
        const subLevelElems = flattenMap(subLevel);
        for (const subLevelElem of subLevelElems) {
            result.push([level.code, level.name, ...subLevelElem]);
        }
    }
    return result;
}
const listCate = [
    {
        name: 'Giỏ quà mùa vụ',
        code: '101',
        children: [
            {
                name: 'Gio qua tet',
                code: '101-1',
                children: [
                    {
                        name: 'Hieu',
                        code: '101-2',
                    },
                ],
            },
            {
                name: 'Giỏ quà Tết 2',
                code: '101-2',
                children: [
                    {
                        name: 'tét them phm',
                        code: '101-2-4',
                        children: [
                            {
                                name: 'Không Xạo Ke',
                                code: '101-2-4-1',
                                children: [
                                    {
                                        name: 'Không xạo ke 2',
                                        code: '101-2-4-1-1',
                                        children: [
                                            {
                                                name: 'Khong xao ke 6',
                                                code: '101-2-4-1-1-1',
                                            },
                                        ],
                                    },
                                    {
                                        name: 'Khong xao ke 3',
                                        code: '101-2-4-1-2',
                                        children: [
                                            {
                                                name: 'Khong xao ke 5',
                                                code: '101-2-4-1-2-1',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
const keke = [];
for (let i = 0; i < listCate.length; i++) {
    const element = flattenMap(listCate[i]);
    keke.push(...element);
}
console.log('result:', keke);
