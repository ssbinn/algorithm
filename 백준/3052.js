const fs = require('fs');
// "/dev/stdin"
const input = fs.readFileSync("input.txt").toString().trim().split('\n');

// const list = [];

// input.forEach(x => {
//     let num = x % 42;

//     if (list.indexOf(num) == -1) { // 일치하는 게 있으면 첫번째 index, 없으면 -1 반환
//         list.push(num);
//     }
// })
// console.log(list.length);

const a = new Set(input.map(x => x % 42));
console.log(a.size);
