const fs = require('fs');
const filePath = process.platform === "window" ? "/dev/stdin" : "input.txt";

const input = fs.readFileSync(filePath).toString().trim().split('\n');

let h = input[0].split(' ')[0];
let m = input[0].split(' ')[1];
let t = input[1];

function solution(h, m, t) {
    m += t;

    while (m >= 60) {
        m -= 60;
        h += 1;
    }
    h %= 24;
    console.log(h, m)
}
// solution(h, m, t)
solution(+h, +m, +t) // number로 형변환. + 연산자로 붙여야 결과가 나옴
