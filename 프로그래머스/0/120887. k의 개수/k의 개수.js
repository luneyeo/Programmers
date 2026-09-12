function solution(i, j, k) {
    let sum = 0;
    
    for(let num = i; num <= j; num++){
        sum += num.toString().split('').filter(n => n === k.toString()).length
    }
    return sum;
}