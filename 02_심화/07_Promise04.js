// 즉시 성공 Promise
new Promise((resolve) => {
    resolve(10);
})
Promise.resolve(10);
// 함수가 항상 Promise를 반환하게 만들기
function getData(){
    return Promise.resolve('데이터');
}
getData().then(console.log);
// Promise 체이닝을 사용
Promise.resolve(1)
    .then((n) => n + 1)
    .then(console.log);
