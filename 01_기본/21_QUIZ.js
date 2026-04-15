// Quiz-로또발생기
// 랜덤 발생함수 Math.random() 함수를 사용해서 로또 발생기를 만드시오. 정렬은 하지않아도 됨
// ※ Math.random()함수는 0이상 1미만의 난수를 생성

function getLotto() {
    const numbers = [];

    while (numbers.length < 6) {
        const num = Math.floor(Math.random() * 45) + 1;

        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }

    return numbers;
}

console.log(getLotto());
