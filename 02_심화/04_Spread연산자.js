// Spread

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log('arr2', arr2);

const person = {name: 'RM', age: 20};
const copy = {...person}
console.log('copy', copy);

const user = {name: '손흥민', age: 20};
const newUser = {...user, age: 21};
console.log(newUser);

