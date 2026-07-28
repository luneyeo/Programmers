function solution(n) {
    if(n < 8) return 1
    if(n % 7 === 0) {
        return Math.trunc(n / 7)
    } else {
        return Math.trunc(n / 7) + 1
    }
    
}