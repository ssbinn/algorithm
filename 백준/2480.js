const fs = require('fs');
// "/dev/stdin"
let [a, b, c] = fs.readFileSync("input.txt").toString().trim().split(' ').map(Number);

if (a === b && b === c && c === a) {
    console.log(10000 + a * 1000)
}
if (a !== b || b !== c || c !== a) {
    if (a === b || a === c) {
        console.log(1000 + a * 100);
    } else if (b === c) {
        console.log(1000 + b * 100);
    }
}
if (a !== b && b !== c && c !== a) {
    const sort = [a, b, c].sort();
    console.log(sort.pop() * 100); // 배열의 마지막 요소 * 100
}
