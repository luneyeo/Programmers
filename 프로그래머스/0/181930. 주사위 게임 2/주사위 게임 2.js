function solution(a, b, c) {
    const sum = a + b + c;
    const square = a * a + b * b + c * c;
    const cube = a * a * a + b * b * b + c * c * c;

    if (a !== b && b !== c && a !== c) return sum;
    else if (a === b && b === c) return sum * square * cube;
    else return sum * square;
}