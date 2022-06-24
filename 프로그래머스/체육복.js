function solution(n, lost, reserve) {
    let answer = n - lost.length;
    
    // 여벌 체육복을 가져온 학생이 체육복을 도난당한 경우, 중복 값 제거
    let realLost = lost.filter((l) => !reserve.includes(l));
    let realReserve = reserve.filter((r) => !lost.includes(r));
    answer += lost.length - realLost.length;
    
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
