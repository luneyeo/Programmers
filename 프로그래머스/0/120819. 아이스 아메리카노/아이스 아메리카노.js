// function solution(money) {
//     const price = 5500
//     let arr = []
    
//     const max = Math.floor(money / price)
//     const minus = money - (max * price)
//     arr.push(max, minus)
    
//     return arr
// }
const solution = (money) => {
    return [Math.floor(money / 5500), money % 5500]
}