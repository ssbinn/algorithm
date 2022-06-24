function solution(n, lost, reserve) {
    let answer = n - lost.length;
    
    // 여벌 체육복을 가져온 학생이 체육복을 도난당한 경우, 중복 값 제거
    let realLost = lost.filter((l) => !reserve.includes(l));
    let realReserve = reserve.filter((r) => !lost.includes(r));  // lost.includes()는 표현식이기 때문에 중괄호로 감싸지 않음
    answer += lost.length - realLost.length;
    
    // lost 배열 요소들이 내림차순일 경우를 대비해 오름차순으로 정렬
    realLost.sort((a ,b) => {return a - b});
    
    realLost.forEach((item) => {
        if (realReserve.length === 0){
            return;
        }
        
        if (realReserve.includes(item - 1)) {
            realReserve = realReserve.filter((r) => r !== item - 1);
            answer++;
        } else if (realReserve.includes(item + 1)) {
            realReserve = realReserve.filter((r) => r !== item + 1);
            answer++;
        }
    })
    return answer;
}

/*
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// 다음과 동일함:  => { return expression; }
*/
