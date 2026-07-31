const solution = (num_list) => {
    const odd = num_list.filter((el) => el % 2 !== 0).join("")
    const even = num_list.filter((el) => el % 2 === 0).join("")
    
    return Number(odd) + Number(even)
    
}