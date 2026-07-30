// const solution = (strlist) => {
//     const arr = []
    
//     for(let i = 0; i < strlist.length; i++){
//         arr.push(strlist[i].length)
//     }
    
//     return arr
// }
const solution = (strlist) => {
    return strlist.map((el) => el.length)
}