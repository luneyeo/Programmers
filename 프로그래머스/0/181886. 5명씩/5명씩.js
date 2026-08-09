function solution(names) {
    const arr = [];
    for(let i = 0; i < names.length; i++){
        if(i == 0 || i % 5 == 0){
            arr.push(names[i])   
        }
    }
    
    return arr
}