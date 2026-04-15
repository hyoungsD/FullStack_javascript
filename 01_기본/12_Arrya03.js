
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.sort();
console.log(fruits);
// Output: ['Apple', 'Banana', 'Mango', 'Orange']

const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort();
console.log(numbers);
// Output: [1, 10, 100, 25, 40, 5] (incorrect for numbers)

// 오름차순 정렬
// n1 - n2 > 이면 자리 바꿈
numbers.sort(function (n1, n2){return n1 - n2});
console.log(numbers);
// Output: [1, 5, 10, 25, 40, 100]

numbers.sort((n1, n2) => n2 - n1);
console.log(numbers);
// Output: [ 100, 40, 25, 10, 5, 1 ]

