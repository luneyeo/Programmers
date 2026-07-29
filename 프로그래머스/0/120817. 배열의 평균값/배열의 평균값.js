// function solution(numbers) {
//     let sum = 0;
//     numbers.forEach((n) => {
//         sum += n
//     })
//     return sum / numbers.length
    
// }
const solution = (numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0) / numbers.length
}