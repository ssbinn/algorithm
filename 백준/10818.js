const fs = require('fs');
// "/dev/stdin"
const input = fs.readFileSync("input.txt").toString().trim().split('\n');

let count = Number(input[0]);
let answer = input[1].split(' ').map(Number);

answer.sort((a, b) => {
    if (a < b) return -1; // 오름차순
    // if (a > b) return -1; // 내림차순
});

console.log(answer[0], answer[count - 1]);
// console.log(answer.shift(), answer.pop()); // 틀리다고 하는 이유?
