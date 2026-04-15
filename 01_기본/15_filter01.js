const nums = [1,2,3,4,5];

const evenNumbers = nums.filter((num) => {
    // 결과가 true이면 통과
    return num % 2 === 0;
})

console.log(evenNumbers);
// 출력: [2,4]
