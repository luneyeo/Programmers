function solution(a, b) {
    const aa = String(a)
    const bb = String(b)
    return Math.max(aa + bb, bb + aa)
}