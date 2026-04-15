const p = new Promise((resolve) => {
    console.log('1. Promise 실행');
    resolve(10);
});
console.log('2. 코드 계속 실행');

p.then((num) => {
    console.log('3. then 실행', num);
});