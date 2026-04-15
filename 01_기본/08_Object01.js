// Object

// •데이터와 기능을 한데 묶어 관리할 수 있는 중요한 자료형
// •객체는 키(Key)와 값(Value)의 쌍으로 구성
// •키(Key)와 값(Value)을 Object의 속성이라고 함
// •함수(Function)를 속성으로 가질 수 있음
// •객체내에 정의된 함수를 메서드(Method)라고 함


// 객체 리터럴
const human = {
    name: '라일랜드',   // 객체의 속성
    age: 30,
}
// 객체 내부의 속성에 접근할때는 '.', 또는 ['속성명']을 사용
human.age = 20;
human['name'] = '그레이스';
console.log(human.name, human['age']); 


// 객체에 속성 추가 삭제
human.job = 'teacher';
console.log(human.job);

human.info = function(){
    console.log(`이름은 ${this.name}이고 직업은 ${this.job}이다`);
};
human.info();

delete human.age;
console.log(human.age);

