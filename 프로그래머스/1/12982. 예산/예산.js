function solution(d, budget) {
    const sorted = d.sort((a, b) => a - b)
    
    let result = budget;
    let count = 0;
    for(let i = 0; i < sorted.length; i++){
        if(result - sorted[i] >= 0){
            result -= sorted[i];
            count += 1;
        }
    }
    
    return count;
}