unction solution(id_list, report, k) {

    const report_list = {}
    const answer = new Array(id_list.length);
    answer.fill(0);

    id_list.map(user => {
        report_list[user] = [];
    })

    report.map(user => {
        const [a, b] = user.split(' ');
        if (!report_list[b].includes(a)) {
            report_list[b].push(a);
        }
    })

    for (const key in report_list) {
        if (report_list[key].length >= k) {
            report_list[key].map(user => {
                answer[id_list.indexOf(user)] += 1;
            })
        }
    }

    return answer;
}
