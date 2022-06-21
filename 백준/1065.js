const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split('\n');

solution(+input[0]);

function f(X) {
    const strX = String(X);
    if (strX.length <= 2) {
        return true;
    }

    // srtX.length가 3 이상인 경우, 등차수열 판별 필요 
    const diffA = +strX[0] - +strX[1];
    const diffB = +strX[1] - +strX[2];
    if (diffA === diffB) {
        return true;
    }
}

function solution(N) {
    let cnt = 0;
    for (let i = 1; i <= N; i++) {
        if (f(i) === true) {
            cnt++;
        }
    }
    console.log(cnt);
}
