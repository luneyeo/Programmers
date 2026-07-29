function solution(my_string, n) {
    const arr = my_string.split("")
    let words = [];
    for( let i = 0; i < arr.length; i++){
        words.push(arr[i].repeat(n))
    }
    return words.join("")
}