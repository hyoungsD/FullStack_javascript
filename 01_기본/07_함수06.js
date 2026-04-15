// 함수형 매개변수
function sayHello(name){
    console.log(`Hello ${name}`);
}
function sayHi(name){
    console.log(`Hi ${name}`);
}
function greet(name, callback){
    // doSomething
    console.log(name);
    callback(name);
}
greet('깐부', sayHi);
greet('선생님', sayHello);