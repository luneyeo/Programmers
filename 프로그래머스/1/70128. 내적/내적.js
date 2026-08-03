function solution(a, b) {
    return a.map((el, index) => el * b[index]).reduce((a, c) => a + c, 0)
}