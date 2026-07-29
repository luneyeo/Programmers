function solution(n, k) {
    const num = Math.floor(n / 10)
    return (n * 12000) + ((k - num) * 2000)
}