// 활용,
let bts1 = ['진', '슈가', '제이홉', 'RM'];
console.log(bts1);
let bts2 = new Array('지민', '뷔', '정국');
console.log(bts2);

console.log(bts1.indexOf('슈가'));
console.log(bts2.indexOf('슈가'));

console.log(bts1.includes('RM'));
console.log(bts2.includes('지민'));

// 추가
bts1.push('박보검');    // 맨 뒤에 추가
console.log(bts1);
console.log(bts1.length);
bts1.unshift('이도현'); // 맨 앞에 추가
console.log(bts1);

// 삭제
let first = bts1.shift();   // 첫번째 아이템 삭제
console.log(bts1);
console.log(first);
let last = bts1.pop();  // 마지막 아이템 삭제
console.log(last);
console.log(bts1);

// 일부분으로 새로운 배열을 만듬
let bts3 = bts1.slice(0, 2);
console.log(bts3);
console.log(bts1);

bts3 = bts1.slice(-1);
console.log(bts3);
bts3 = bts1.slice(-3);
console.log(bts3);

// 배열 합치기
const bts = bts1.concat(bts2);
console.log(bts);

// 역순 배열
const rbts = bts.reverse();
console.log(rbts);

// 배열을 문자열로 합하기
const members = bts.join(', ');
console.log(members);
