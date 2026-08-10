function solution(my_string) {
    const arr = [];
    for(let i = my_string.length; i > 0; i--){
        arr.push(my_string.slice(i - 1, my_string.length))
    }
    
    return arr.sort()
}