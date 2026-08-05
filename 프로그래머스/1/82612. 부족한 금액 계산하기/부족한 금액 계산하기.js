function solution(price, money, count) {
    let total = 0;
    for(let i = 1; i <= count; i++){
        total += i * price
    }
    
    return money < total ? total - money : 0
}