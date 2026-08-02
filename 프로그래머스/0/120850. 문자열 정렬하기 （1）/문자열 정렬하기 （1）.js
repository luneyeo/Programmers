function solution(my_string) {
    return [...my_string].filter((el) => !isNaN(el)).map(Number).sort((a, b) => a - b)
}