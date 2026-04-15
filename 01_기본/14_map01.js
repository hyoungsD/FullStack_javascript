const nums = [1,2,3,4,5];

// 고차원 삼수인 map은 함수를 인자로 받음
const doubled = nums.map((num) => {
    return num * 2;
})
console.log(doubled);
// 출락: [2,4,6,8,10]
