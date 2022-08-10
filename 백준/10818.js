const fs = require('fs');
// "/dev/stdin"
const input = fs.readFileSync("input.txt").toString().trim().split('\n');

let count = Number(input[0]);
let answer = input[1].split(' ').map(Number);

answer.sort((a, b) => a - b);

console.log(answer[0], answer[count - 1]);
