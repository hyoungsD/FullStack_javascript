// Array 선언과 초기화

const numbers = [1,2,3,4,5];
console.log(numbers[0]);    // index는 0부터 시작

let array = new Array(2);   // size
console.log(array);

array = new Array(1,2,3,4,5);
console.log(array);


// item 갯수, 수정, 추가, 삭제

// item의 갯수
console.log(numbers.length);

numbers[3] = -4;
numbers[5] = 6; // 추가
console.log(numbers.length, numbers);

numbers[8] = 7;
console.log(numbers.length, numbers);

// item 삭제
delete numbers[3];
console.log(numbers.length, numbers);
