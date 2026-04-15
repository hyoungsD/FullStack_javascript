// Rest 매개변수
function sum(...nums){
    console.log(nums);
}
sum(1,2,3,4,5);

function sum1(num1, num2, ...nums){
    console.log(num1);
    console.log(num2);
    console.log(nums);
}
sum1(1,2,3,4,5);
// Rest 매개변수는 반드시 마지막에 와야 한다!!

