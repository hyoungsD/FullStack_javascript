// 점수(score)를 매개 변수로 전달받아
// 학점(A,B~F)를 반환하는 함수를 정의하고 여러번 호출하시오
function Grade(score){
    let result;
    if(score > 90){
        result = `학점은 A`;
    }else if(score > 80){
        result = `학점은 B`;
    }else if(score > 70){
        result = `학점은 C`;
    }else if(score > 60){
        result = `학점은 D`;
    }else if(score > 50){
        result = `학점은 E`;
    }else{
        result = `학점은 F`;
    }
    return result;
}
Grade(99);
Grade(85);
Grade(72);
Grade(67);
Grade(53);
Grade(30);


// 두 수와 연산자(string형)을 입력받아서
// 사칙연산 후 결과를 반환하는 calc함수를 만드시오
// 단 예외사항은 고려하지 않는다
function calc(num1, num2, operator){
    console.log(`${num1} ${operator} ${num2}`);
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => b !== 0 ? a / b : 'Cannot divide by zero',
        '%': (a, b) => a % b
    };
    return operations[operator](num1, num2);
}
result1 = calc(5,10,'*');
console.log(result1);
result2 = calc(30,3,'-');
console.log(result2);
result3 = calc(3,7,'*');
console.log(result3);
result4 = calc(8,2,'/');
console.log(result4);
result5 = calc(13,6,'%');
console.log(result5);
