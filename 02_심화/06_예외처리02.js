// 에러 throw
try{
    throw new Error('문제 발생');
}catch(error){
    console.log(error.message);
}

function checkAge(age){
    if(age< 18){
        throw new Error('미성년자');
    }
    return '통과';
}
try{
    checkAge(15);
}catch(error){
    console.log(error);
}
