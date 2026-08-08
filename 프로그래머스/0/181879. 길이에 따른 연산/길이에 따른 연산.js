function solution(num_list) {
    if(num_list.length >= 11){
        const sum = num_list.reduce((a, c) => a + c, 0)
        return sum
    }
    if(num_list.length <= 10){
        const multiply = num_list.reduce((a, c) => a * c, 1)
        return multiply                  
    }
}