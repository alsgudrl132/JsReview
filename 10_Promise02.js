// const f1 = (callback) => {
//     setTimeout(function () {
//         console.log('1번 주문 완료');
//         callback();
//     }, 1000);
// };
// const f2 = (callback) => {
//     setTimeout(function () {
//         console.log('2번 주문 완료');
//         callback();
//     }, 1000);
// };
// const f3 = (callback) => {
//     setTimeout(function () {
//         console.log('3번 주문 완료');
//         callback();
//     }, 1000);
// };

// console.log('시작');
// f1(function () {
//     f2(function () {
//         f3(function () {});
//     });
// });
//-------------------------------------------------------------
const c1 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('1번 주문 완료');
        }, 1000);
    });
};
const c2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('2번 주문 완료');
        }, 3000);
    });
};
const c3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('3번 주문 완료');
        }, 2000);
    });
};

console.log('시작');
c1()
    .then((res) => c2(res))
    .then((res) => c3(res))
    .then((res) => console.log(res))
    .catch(console.log)
    .finally(() => {
        console.log('끝');
    });
