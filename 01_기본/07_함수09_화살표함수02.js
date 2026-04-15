// 매개변수로써 화살표함수

function greet1(name, callback) {
    return callback(name);
}
let result;
result = greet1("선생님", (name) => {
    return `Hello ${name}`;
});
console.log(result);
//return 생략
result = greet1("깐부", (name) => `Hello ${name}`);
console.log(result);
