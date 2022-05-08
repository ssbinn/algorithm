// hash로 풀어보기

function solution(participant, completion) {
    var answer = '';

    participant.sort()
    completion.sort()
    console.log(participant)
    console.log(completion)

    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            answer = participant[i];
        }
    }

    return answer;
}
/*
completion의 길이는 participant의 길이보다 1 작다.
근데 같은 i로 배열 요소를 비교할 수 있음 

for (let i = 0; i < participant.length; i++){
    console.log(completion[i]) // eden kiki "undefined" 출력
}
*/
