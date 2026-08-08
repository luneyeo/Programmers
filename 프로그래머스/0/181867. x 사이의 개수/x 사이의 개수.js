// function solution(myString) {
//     const arr = myString.split("x")
//     const result = []
    
//     for(let char of arr){
//         result.push(char.length)    
//     }
    
//     return result
// }
const solution = (string) => {
    return string.split("x").map((el) => el.length)
}