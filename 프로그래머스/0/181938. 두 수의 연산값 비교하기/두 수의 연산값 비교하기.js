function solution(a, b) {
    const answer = Number(String(a) + String(b))
    const multiply = 2 * a * b
    if(answer >= multiply) {
        return answer
    } else {
        return multiply
    }
}