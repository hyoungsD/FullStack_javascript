// 비교, 논리연산자
let num1 = 5;
let num2 = 3;
let num3 = 2;

console.log(num1 > num2 && num2 > num3);  // true
console.log(num1 == num2 && num1 > num2);  // false
console.log(num1 == num2 || num1 > num2);  //true

console.log(num1 - num2 > num2 - num3 && num2 == 0);  // false
console.log(num1 + num2 > num3 || num3 > 0);  // true

// 연산자 우선순위 : 산술 -> 비교 -> && -> ||



// 대입, 증감연산자
let num = 0;
console.log(num);
num++;  // a = a + 1;
console.log(num);
num--;  // a = a - 1;
console.log(num);
// num++ 필요한 작업 후 값을 증가(후치)
// ++num 값을 증가후 필요한 작업 수행(전치)
num = 1;
console.log(num++);
num = 1;
console.log(++num);
let num4 = num++;
console.log(num4);
console.log(num);
