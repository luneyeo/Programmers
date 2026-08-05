function solution(arr1, arr2) {
    let result = 0;
    
    if(arr1.length !== arr2.length){
        result = arr1.length == arr2.length ? 0 : arr1.length > arr2.length ? 1 : -1
    } else {
        const sum1 = arr1.reduce((a, c) => a + c, 0)
        const sum2 = arr2.reduce((a, c) => a + c, 0)
        result = sum1 == sum2 ? 0 : sum1 > sum2 ? 1 : -1
    }
    
    return result
}