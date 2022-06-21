function solution(id_list, report, k) {
    
    const list = {};
    const answer = new Array(id_list.length).fill(0);
    
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
    
    for (const item in list) {
        if(list[item].length >= k) {
            list[item].map((user) => {
                answer[id_list.indexOf(user)] += 1;
            })  
        }
    }
    
    return answer;
}
