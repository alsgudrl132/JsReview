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
            // res('2번 주문 완료');
            rej('error');
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

// console.log('시작');
// c1()
//     .then((res) => c2(res))
//     .then((res) => c3(res))
//     .then((res) => console.log(res))
//     .catch(console.log)
//     .finally(() => {
//         console.log('끝');
//     });

async function order() {
    try {
        const result1 = await c1();
        const result2 = await c2(result1);
        const result3 = await c3(result2);
        console.log(result3);
    } catch (e) {
        console.log(e);
    }

    console.log('종료');
}
order();
