"use strict";
/**
 * https://leetcode.com/problems/design-hashmap/
 *
 */
class MyHashMap {
    constructor(hm = new Map()) {
        this.hm = hm;
    }
    put(key, value) {
        this.hm.set(key, value);
    }
    get(key) {
        var _a;
        return (_a = this.hm.get(key)) !== null && _a !== void 0 ? _a : -1;
    }
    remove(key) {
        this.hm.delete(key);
    }
}
const myHashMap = new MyHashMap();
myHashMap.put(1, 1);
myHashMap.put(2, 2);
myHashMap.put(3, 4);
myHashMap.put(11, 0);
myHashMap.remove(3);
console.log(myHashMap);
