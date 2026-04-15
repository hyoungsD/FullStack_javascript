const name1 = null ?? 'Guest';
console.log(name1); // 'Guest'

const name2 = undefined ?? 'Guest';
console.log(name2); // 'Guest'

const name3 = 'RM' ?? 'Guest';
console.log(name3); // 'RM'

const name4 = "" || 'Guest';
console.log(name4); // 'Guest'

const name5 = "" ?? 'Guest';
console.log(name5); // ''