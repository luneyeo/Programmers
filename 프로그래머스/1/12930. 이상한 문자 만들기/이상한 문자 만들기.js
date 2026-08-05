function solution(s) {
    const arr = s.split(" ")
    return arr.map((el) => [...el].map((char, i) =>  i == 0 || i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join("")).join(" ")
}