function solution(str_list, ex) {
    const arr = str_list.filter((el) => !el.includes(ex))
    return arr.join("")
}