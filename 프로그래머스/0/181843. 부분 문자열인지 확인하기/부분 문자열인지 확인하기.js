// function solution(my_string, target) {
//     var answer = 0;
//     const result = my_string.search(target)
//     if(result === -1){
//         answer = 0
//     } else {
//         answer = 1
//     }
//     return answer;
// }

const solution = (string, target) => {
    return string.includes(target) ? 1 : 0
}