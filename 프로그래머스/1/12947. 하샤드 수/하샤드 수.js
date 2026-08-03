function solution(x) {
    const sum = String(x).split("").reduce((a, c) => a + Number(c), 0)
    return x % sum === 0 ? true : false
}