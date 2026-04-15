const promise = new Promise((resolve, reject) => {
    const success = true;
    if(success){
        resolve('작업 성공!');
    }else{
        reject('작업 실패!');
    }
});
promise
    .then((result) => {
        console.log('성공 결과:', result);
    })
    .catch((error)=> {
        console.error('실패 결과', error);
    })
