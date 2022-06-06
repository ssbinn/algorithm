const fs = require('fs');
// "/dev/stdin"
const input = fs.readFileSync("input.txt").toString().trim().split('\n');

const num = +input[0];

for (let i = 1; i <= num; i++) {
    const lists = input[i].split(' ').map(Number);
    const first = lists[0];

    let sum = 0;

    for (let j = 1; j <= first; j++) {
        sum += lists[j];
    }

    let average = sum / first;
    let count = 0;
    for (let k = 1; k <= first; k++) {
        if (average < lists[k]) {
            count++;
        }
    }
    // 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력
    console.log(((count / first) * 100).toFixed(3) + "%");

}
