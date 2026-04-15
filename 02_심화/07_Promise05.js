// 즉시 실패 Promise
Promise.reject('에러').catch(console.log);

function checkAge(age){
    if (age < 18){
        return Promise.reject('미성년자');
    }
    return Promise.resolve('통과');
}

checkAge(15).catch(console.log);
