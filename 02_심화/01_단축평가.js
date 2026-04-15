console.log(true && 'hello');   // 'hello'
console.log(false && 'hello');  // false

console.log(true || 'hello');   // true
console.log(false || 'hello');  // 'hello'


// 사용자가 이름을 입력하지 않았을 때(null 또는 undefined) 기본값 할당
let userName = '';  // Falsy
let displayName = userName || 'Guest';

console.log(displayName);   // 'Guest'

// 값이 존재할 경우
userName = 'Wizard';
displayName = userName || 'Guest';

console.log(displayName);   // 'Wizard'


let isLoggedIn = true;
let userProfile = {name: 'Alice'};

// 사용자가 로그인했을 때만 이름을 출력
isLoggedIn && console.log(userProfile.name);    // 'Alice'

// 로그인하지 않았다면 아무일도 일어나지 않음
isLoggedIn = false;
isLoggedIn && console.log(userProfile.name);    // (출력 없음)


