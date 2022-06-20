solution();

function d(num) {
    // 숫자의 각 자리수를 구분시키는 방법
    const strNum = String(num);
    let sum = 0;
    for (let i = 0; i < strNum.length; i++) {
        sum += +strNum[i];
    }
    return num + sum;
}

function solution() {
    const arr = Array(10000).fill(0);
    for (let i = 1; i <= 10000; i++) {
        const ans = d(i);
        arr[ans]++;  // 1: 생성자가 있는 숫자
    }
    for (let j = 1; j <= 10000; j++) {
        if (arr[j] === 0) { //  0: 생성자가 없는 숫자
            console.log(j)
        }
    }
}
