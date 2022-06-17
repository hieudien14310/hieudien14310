"use strict";
/**
 * Ví dụ về blocking và non-blocking I/O
 */
function now(txt) {
    const now = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' > ' + txt;
    console.log(now);
}
function wait(miliSeconds, callback) {
    const startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds) { }
    callback();
}
/**
 * Ví dụ về blocking
 * Hàm wait đang blocking hàm now('Finish waiting') ở dưới
 */
now('Hello blocking!');
wait(3000, function () {
    now('End of waiting');
});
now('Finish waiting');
console.log('-----------------------------');
/**
 * Ví dụ về non-blocking
 */
now('Hello non-blocking!');
setTimeout(() => {
    now('End of waiting 1');
}, 0);
setTimeout(() => {
    now('End of waiting 2');
}, 0);
process.nextTick(() => {
    now('End of waiting nextTick 1');
});
process.nextTick(() => {
    now('End of waiting nextTick 2');
});
setTimeout(() => {
    now('End of waiting 3');
}, 0);
now('Finish waiting');
