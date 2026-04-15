// 사칙연산을 담당하는 각각의 함수를 정의하고
// 정의된 함수들을 매개변수로 전달받아서 처리하는 calc2 함수를 정의하고 호출하시오

function add(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
function mul(a, b){
    return a * b;
}
function div(a, b){
    return a / b;
}

// 앞에서 했던 calc 함수를 사칙연산을 담당하는 각각의 함수를 매개변수로 전달받아서 처리하는 calc2함수를 정의하시오

function calc2(n1, n2, callback){
    return callback(n1, n2);
}


console.log(calc2(10, 5, add)); // 15
console.log(calc2(10, 5, sub)); // 5
console.log(calc2(10, 5, mul)); // 50
console.log(calc2(10, 5, div)); // 2