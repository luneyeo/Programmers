const solution = (rsp) => {
    return rsp
        .split("")
        .map((el) => {
             if(el == 2) return 0
            else if(el == 0) return 5
            else return 2
        }).join("")
}