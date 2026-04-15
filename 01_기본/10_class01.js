class Person1 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log('Hello, ' + this.name);
    }
}
// person3은 Person1 클래스의 인스턴스
const person3 = new Person1('양금명', 20);
console.log(person3.name, person3.age);
person3.greet();
