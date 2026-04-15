// 구구단의 단을 매개변수로 전달받아 출력하는 함수를 정의하고 호출하시오

function calc(num){
    for(i=1; i<10; i++){
        console.log(`${num}x${i}=${num*i}`);
    }
}
calc(2);
calc(3);
calc(4);
calc(5);
calc(6);
calc(7);
calc(8);
calc(9);