const bts = ['RM', '진', '슈가', '제이홉', '지민', '뷔', '정국'];
// for loop 사용
for (let i=0; i<bts.length; i++){
    console.log(bts[i]);
}
// for of 사용
for(let members of bts){
    console.log(members);
}
// forEach 사용
bts.forEach((member, index, array) => {
    console.log(`전체 ${array.length}명중에 ${index}번째 멤버 ${member}입니다`);
});
