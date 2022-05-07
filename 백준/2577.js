const fs = require('fs');
// "/dev/stdin"
const input = fs.readFileSync("input.txt").toString().trim().split('\n');

// num = input[0] * input[1] * input[2];
// console.log(typeof(num))  // number > num[0] 접근 불가
const num = String(input[0] * input[1] * input[2]);  // string > num[0] 접근 가능


for (let i = 0; i <= 9; i++) {
    let count = 0;

    for (let j = 0; j < num.length; j++) {
        if (i === Number(num[j])) {
            count++;
        }
    }
    console.log(count);
}
/*
숫자를 숫자 리터럴과 비교하면 
'==' 연산자는 허용(true)하지만, 
'===' 연산자의 경우 값뿐만 아니라 두 변수의 유형도 확인하므로 허용하지 않는다(false).
*/
