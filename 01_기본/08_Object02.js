// 객체 리터럴 - Method
const eridian = {
    name: '로키',   // 객체의 속성
    age: 30,
    greet: function(){  // 객체의 method
        // this는 현재의 object 자신을 의미함(호출방식에 따라 바뀜)
        console.log(`안녕 나는 ${this.name}야!`);
    },
    goodbye(){  // Method의 축약표현
        console.log('goodbye');    
    }
};
eridian.greet();
eridian.goodbye();
