function getDistance(arr1, arr2) {
    // 1: [0,0] 2: [0,1] 3: [0,2]
    // 4: [1,0] 5: [1,1] 6: [1,2]
    // 7: [2,0] 8: [2,1] 9: [2,2]
    // *: [3,0] 0: [3,1] #: [3,2]
    
    return Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
}

function solution(numbers, hand) {
    var answer = '';
    
    let leftOnly = [1, 4, 7];
    let rightOnly = [3, 6, 9];
    let both = [2, 5, 8, 0];
    
    let leftP = [3, 0];
    let rightP = [3, 2];
    
    numbers.forEach((num) => {
        if (leftOnly.includes(num)){
            answer += "L";
            leftP = [leftOnly.indexOf(num), 0]; 
        } else if (rightOnly.includes(num)){
            answer += "R";
            rightP = [rightOnly.indexOf(num), 2]; 
        } else if (both.includes(num)){
            // 거리 비교
            let index = [both.indexOf(num), 1];
            
            let LDist = getDistance(leftP, index); // [1, 0] [1,1] 1
            let RDist = getDistance(rightP, index); // [0,2] [1,1] 2
            
            // 두 엄지손가락의 거리가 같을 경우 
            if (LDist === RDist) {
                if (hand === "left"){
                    answer += "L";
                    leftP = index; 
                } else if (hand === "right") {
                    answer += "R";
                    rightP = index;
                }
            } else if (LDist < RDist) {  // 왼손이 더 가까운 경우
                answer += "L";
                leftP = index; 
            } else {  // 오른손이 더 가까운 경우
                answer += "R";
                rightP = index;
            }
        }
    })
        
    return answer;
}
