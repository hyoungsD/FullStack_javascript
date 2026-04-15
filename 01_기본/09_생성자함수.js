// 생성자 함수
function Person(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`안녕 나는 ${this.name}야!`);
    }
}

const person1 = new Person('양관식', 20);
const person2 = new Person('오애순', 20);
console.log(person1.name, person1.age);
person2.greet();
