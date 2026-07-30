// const solution = (string) => {
//     const number = string.split("").filter((n) => n > 0)
    
//     let sum = 0;
//     for(let i = 0; i < number.length; i++){
//         sum += Number(number[i])
//     }
    
//     return sum
// }

const solution = (string) => {
    return [...string].filter((n) => n > 0).reduce((a, c) => a + Number(c), 0)
}