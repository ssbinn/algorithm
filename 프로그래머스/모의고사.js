function solution(answers) {
    var answer = [];
    
    let count = [0, 0, 0];
    
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for (let i = 0; i<answers.length; i++) {
        if (one[i % one.length] === answers[i]) count[0] += 1;
        if (two[i % two.length] === answers[i]) count[1] += 1;
        if (three[i % three.length] === answers[i]) count[2] += 1;
    }
    
    const max = Math.max(...count);
    
    for (let j = 0; j < count.length; j++){
        if(count[j]===max){
            answer.push(j+1)
        }
        console.log(answer)
    }
    
    return answer;
}
