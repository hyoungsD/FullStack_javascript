// 기본형태
let fn = (매개변수) => {
  //doSomething
};
// 매개변수가 1개일때 괄호 생략가능
let square = (x) => {
  return x * x;
};
// 매개변수가 1개일때 괄호 생략 불가
const sayHi = () => {
    console.log("Hi");
};
// 함수바디가 한 줄이면 자동 return, {}같이 생략해야함
const add = (a, b) => a + b;
// 반환형이 객체일 경우 ()로 감싸야 함
const getUser = () => ({ name: 'Son' });
