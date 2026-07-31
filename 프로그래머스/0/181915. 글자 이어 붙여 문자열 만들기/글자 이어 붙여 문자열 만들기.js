// const solution = (my_string, index_list) => {
//     // 1. 문자열 배열로 변환
//     // 2. index_list의 값으로 배열의 인덱스 사용
//     const stringArr = my_string.split("")
//     let result = []
//     for(let i = 0; i <= index_list.length; i++){
//         const index = index_list[i]
//         result.push(stringArr[index])
//     }
//     return result.join("")
// }
const solution = (string, index_list) => {
    return index_list.map((i) => string.split("")[i]).join("")
}