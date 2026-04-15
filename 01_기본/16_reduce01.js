const nums = [1,2,3,4,5];

const sum = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);  // 초기값

console.log(sum);   // 출력: 15
