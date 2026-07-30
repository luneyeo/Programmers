const solution = (price) => {
    let result = 0;
    
    if(price >= 500000){
        result = price - (price * 0.2)
    } else if(price >= 300000){
        result = price - (price * 0.1 )
    } else if(price >= 100000){
        result = price - (price * 0.05)
    } else result = price
    
    return Math.floor(result)
}