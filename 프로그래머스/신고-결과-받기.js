function solution(id_list, report, k) {
    
    const list = {};
    const answer = new Array(id_list.length).fill(0);
    
    // map으로 배열의 요소에 접근
    id_list.map((id) => {
        list[id] = [];  // { muzi: [], ...}
    })
    
    report.map((user) => {
        const [a, b] = user.split(' ');
        if(!list[b].includes(a)) {
            list[b].push(a);
        }
        // ID: ID를 신고한 user
        // {frodo: [ 'muzi', 'apeach' ]}
    })
    
    for (const item in list) {  // for...in문으로 index에 접근, console.log(item); // 0 1 이런 식
        if(list[item].length >= k) {
            list[item].map((user) => {
                answer[id_list.indexOf(user)] += 1;
            })  
        }
    }
    
    return answer;
}
