const solution = (arr) => {
    const max = Math.max(...arr)
    const index = arr.findIndex((el) => el === max) 
    return [max, index]
}