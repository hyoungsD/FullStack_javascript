// Promise 체이닝
const p1 = new Promise((resolve) => {
    const result = 10;
    resolve(result);
});

// 반환값: 11 -> resolve(11)을 호출하는 Promise를 생성
const p2 = p1.then((num) => num + 1);

p2.then((num) => console.log(num));

p1.then((num) => num + 1).then((num) => console.log(num));

