function solution(s) {
    const arr = [...s]
    const center = Math.floor(s.length / 2)
    if(s.length % 2 === 0){
        return arr[center - 1] + arr[center]
    } else return arr[center]

}
