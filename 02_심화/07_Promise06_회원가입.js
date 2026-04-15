// 회원가입
const DB = [];

function saveDB(user){
    const oldDBLength = DB.length;
    DB.push(user);
    console.log(`${user.name} 저장 완료되었습니다`);
    return new Promise((resolve, reject) => {
        if(DB.length > oldDBLength){
            resolve(user);
        }else{
            reject(new Error('저장에 실패하였습니다!'));
        }
    })
}

function sendEmail(user){
    console.log(`${user.email}으로 이메일을 발송했습니다`);
    return new Promise((resolve) => {
        resolve(user);
    })
}

function getResult(user){
    return new Promise((resolve) => {
        resolve(`${user.name}님 등록 성공했습니다`);
    })
}

function registerByPromise(user){
    const result = saveDB(user)
        .then(sendEmail)
        .then(getResult)
        .catch((error) => new Error(error));
    return result;
}

const myUser = {name: '손흥민', email: 'son@naver.com'};
const result = registerByPromise(myUser);
result.then(console.log);
