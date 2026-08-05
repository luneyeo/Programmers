// function solution(arr1, arr2) {
//     const result = []
//     for(let i = 0; i < arr1.length; i++){
//         result[i] = []
//         for(let j = 0; j < arr1[i].length; j++){
//             result[i][j] = arr1[i][j] + arr2[i][j]
//         }
//     }
    
//     return result
// }
const solution = (arr1, arr2) => {
    return arr1.map((el, i) => el.map((num, j) => num + arr2[i][j]))
}