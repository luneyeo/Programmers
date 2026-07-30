const solution = (n) => {
    let result = 2;
    for(let i = 1; i < n; i++){
        if(i * i === n){
            result = 1
        }
    }
    
    return result
}