// 객체 분해(Object Desturing)
const user = {
    name: 'RM',
    age: 30,
}

// 기존방식
const name = user.name;
const age = user.age;

// 객체분해방식
const user1 = {
    name1: 'RM',
    age1: 30,
}
const {name1, age1} = user1;

console.log(name1);
console.log(age1);
