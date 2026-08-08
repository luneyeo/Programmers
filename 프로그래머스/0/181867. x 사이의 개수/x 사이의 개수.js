function solution(myString) {
    const arr = myString.split("x")
    const result = []
    
    for(let char of arr){
        result.push(char.length)    
    }
    
    return result
}