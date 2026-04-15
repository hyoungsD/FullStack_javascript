// 1~10까지의 숫자 중에 3의 배수만 골라서 2배한 후 합을 구하시오

const nums = [1,2,3,4,5,6,7,8,9,10];

const result = nums
    .filter(num => num % 3 === 0)   // 3의 배수
    .map(num => num * 2)           // 2배
    .reduce((acc, cur) => acc + cur, 0); // 합

console.log(result);

