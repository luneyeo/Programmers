const solution = (ab, signs) => {
    return ab.reduce((sum, val, i) => sum + (signs[i] ? val : -val), 0);
}