const solution = (array, height) => {
    return array.sort((a, b) => a - b).filter((h) => h > height).length
}