// async / await

// - Promise를 더 쉽게 다루기 위한 문법
// - 비동기 코드를 동기 코드처럼 깔끔하게 작성 가능
// - async function은 자동으로 Promise로 감싸서 반환
// - await는 Promise가 해결될 때까지 대기
// - await는 반드시 async 함수 안에서만 사용 가능
// - await 오른쪽은 반드시 Promise


// async 키워드가 붙은 함수는 반환값을 Promise로 감싸서 반환
async function  func1() {
    return 'hello';
}

func1().then(console.log);

function func2(){
    return new Promise((resolve) => {
        resolve('hello');
    });
}

func2().then(console.log);

async function func3(params) {
    // await는 뒤에 오는 프로미스가 실행완료될때까지 기다림
    // async함수에서만 사용 가능
    let name = await func1();
    console.log(name);
}

func3();

