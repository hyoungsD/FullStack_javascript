// 객체 분해 - allias
const user1 = {
    name: 'RM',
    age: 30,
};

const {name: userName, age: userAge} = user1;

console.log(userName);
console.log(userAge);


// 객체 매개 변수
function userInfo(user){
    console.log(`${user.name} - ${user.age}`);
}

userInfo({name: 'RM', age: 30});

function printUser({name, age}){
    console.log(`${name} - ${age}`);
}

printUser({name: 'RM', age: 30});
