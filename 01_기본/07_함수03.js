// 함수 정의 - 반환값
function sayHello2(name){
    return `Hello ${name}`;
    // 함수가 처리한 연산의 결과값을 반환하고 함수 실행을 종료
}
let greeting = sayHello2("RM");
console.log(greeting);
console.log(sayHello2('morning'));

function add(num1, num2){
    return num1 + num2;
}
let result = add(5,4);
console.log(result);


function sayHello3(name){
    console.log('함수시작');
    return;
    console.log('실행안됨');
}
greeting = sayHello3('RM');
console.log(greeting);
// return 문이 없는 함수도 undefined를 반환
