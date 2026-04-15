// Map 선언과 초기화

const map = new Map([['nick', '슈가'], ['group', 'bts'], ['gender', '남'],]);
console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('name'));
console.log(map.has('group'));


// 활용
// 추가
map.set('nation', 'korea');
console.log(map);

// 삭제
map.delete('gender');
console.log(map);