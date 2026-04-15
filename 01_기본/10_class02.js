// private
class Person2{
    #idNo // private ES2022 부터 지원
    constructor(name, age, idNo){
        this.name = name;
        this.age = age;
        this.#idNo = idNo;
    }
    getIDNo(){
        console.log(`idNo: ${this.#idNo}`);
    }
}
const person4 = new Person2('양금명', 20, '123456');
person4.getIDNo();
// console.log(person4.age, person4.#idNo); // 외부에서 접근불가

