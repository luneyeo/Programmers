function solution(arr, n) {
    if(arr.length % 2 !== 0){
        arr = arr.map((el, i) => i % 2 === 0 ? el + n : el)
    } else {
        arr = arr.map((el, i) => i % 2 !== 0 ? el + n : el)        
    }
    
    return arr
}