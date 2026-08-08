function solution(binomial) {
    const [a, op, b] = binomial.split(" ");
    
    const calc = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
    };
    
    return calc[op](Number(a), Number(b));
}