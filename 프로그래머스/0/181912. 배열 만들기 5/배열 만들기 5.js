function solution(intStrs, k, s, l) {
    let arr = [];
    
    for(let el of intStrs){
        const sliced = el.slice(s, s + l)
        const num = Number(sliced)
        
        if(num > k) arr.push(num)
    }
    
    return arr;
}