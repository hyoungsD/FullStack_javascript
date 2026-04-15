// try-catch-finally
try{
    // 실행할 코드
}catch(error){
    // 에러 발생 시 실행
}


try{
    console.log(a);  // a는 정의되지 않음
}catch(error){
    console.log('에러 발생!');
}

try{
    console.log('실행');
}catch(e){
    console.log('에러');
}finally{
    console.log('무조건 실행')
}
