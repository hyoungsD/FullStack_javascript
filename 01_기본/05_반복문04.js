// break, continue

for(let i=0; i<10; i++){
    if(i==2){
        break;
    }
    console.log(`${i} was excuted!`);
}

for(let i=0; i<10; i++){
    if(i===2){
        continue;
    }
    console.log(`${i} was excuted!`);
}


let age = 0;
while(age < 5){
    age += 1;
    if(age === 2) continue;
    console.log(`${age}살입니다`)
}

let age1 = 0;
while(age1 < 5){
    age1 += 1;
    if(age1 === 2) break;
    console.log(`${age1}살입니다`)
}
