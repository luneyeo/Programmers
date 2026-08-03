function solution(arr) {
    const min = Math.min(...arr);
    const result = arr.filter((el) => el !== min)
    return result.length ? result : [-1]
}