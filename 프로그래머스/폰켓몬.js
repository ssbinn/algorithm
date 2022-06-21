function solution(nums) {
    const answer = [];
    const maxLength = nums.length/2;
    
    for (let i = 0; i<nums.length; i++){
        if (answer.length < maxLength) {
            if (!answer.includes(nums[i])) {
                answer.push(nums[i])
            }
        }
    }
    return answer.length;
}
