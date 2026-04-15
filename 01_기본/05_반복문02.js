// while

let age = 0;
while(age < 5){
    console.log(`${age}살입니다`);
    age+=1;
}

let age1 = 0;
let num = 0;
while(age1 < 5){
    while(num < 10){
        console.log(`${age1}살입니다`);
        num += 1;
    }
    num = 0;
    age1 += 1;
}


