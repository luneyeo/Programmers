function solution(n, k) {
    const num = Math.floor(n / 10)
    return (n * 12000) + (k * 2000) - (num * 2000)
}