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

/* 문제

어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 
등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. 
N이 주어졌을 때, 1보다 크거나 같고, 
N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 

*/

/* 풀이

100 미만의 수는 두자릿수 또는 한자릿수이므로 등차수열을 확인할 수 없기에 모두 한수가 된다.
즉 세자릿수부터 등차수열을 확인할 수 있다.

*/
