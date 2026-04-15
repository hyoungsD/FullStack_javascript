// 삼항 조건 연산자
const age = 20;
const result = age > 19 ? '당신은 성인입니다.' : '당신은 미성년자입니다.';
console.log(result);

// 연산자 우선순위
let a = 2;
let b = 3;
let result2 = a + (b * 4) / 5;  // 4.4
console.log(result2);
result2 = ((a + b) * 4) / 5;    // 4
console.log(result2);

result2 = a++ + b * 4;
console.log(result2);   // 14
console.log(a); // 3

