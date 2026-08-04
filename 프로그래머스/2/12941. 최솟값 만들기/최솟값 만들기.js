function solution(A,B){
    const sortA = A.sort((a, b) => a - b)
    const sortB = B.sort((a, b) => b - a)
    
    let sum = 0;
    for(let i = 0; i < sortA.length; i++){
        sum += sortA[i] * sortB[i]
    }
    
    return sum;
}