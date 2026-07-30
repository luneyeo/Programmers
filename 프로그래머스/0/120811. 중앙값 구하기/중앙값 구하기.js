const solution = (array) => {
    const sorted = array.sort((a, b) => a - b)
    const index = Math.floor(array.length / 2)
    return sorted[index]
}