const solution = (t, p) => {
    
    let endIndex = p.length
    let count = 0;
    
    for(let i = 0; i < t.length; i++){
        const el = t.slice(i, endIndex)
        if(el.length >= p.length){
            if(el <= p){
                count += 1;
            }
            endIndex += 1;
        }
    }
    
    return count;
}
