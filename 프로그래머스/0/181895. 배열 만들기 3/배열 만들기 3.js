function solution(arr, intervals) {
    const [a, b] = [...intervals[0]]
    const [c, d] = [...intervals[1]]
    
    const arr1 = arr.slice(a, b + 1)
    const arr2 = arr.slice(c, d + 1)
    
    return [...arr1, ...arr2]
    
}