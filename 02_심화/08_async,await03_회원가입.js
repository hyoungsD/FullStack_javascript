async function registerByAsync(user){
    try{
        const savedUser = await saveDB(user);
        const emailedUser = await sendEmail(savedUser);
        const result = await getResult(emailedUser);
        return result;
    }catch(error){
        return new Error(error);
    }
}

const myUser = {uname: '손흥민', email: 'son@naver.com'};
registerByAsync(myUser).then(console.log);
