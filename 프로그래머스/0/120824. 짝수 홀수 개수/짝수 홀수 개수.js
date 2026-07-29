function solution(num_list) {
     const odd = num_list.filter((n) => n % 2).length
     const even = num_list.length - odd
     return [even, odd]
    
}