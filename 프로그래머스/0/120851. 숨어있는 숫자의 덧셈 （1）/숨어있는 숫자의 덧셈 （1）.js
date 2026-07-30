const solution = (string) => {
    const number = string.split("").filter((n) => n > 0)
    
    let sum = 0;
    for(let i = 0; i < number.length; i++){
        sum += Number(number[i])
    }
    
    return sum
}