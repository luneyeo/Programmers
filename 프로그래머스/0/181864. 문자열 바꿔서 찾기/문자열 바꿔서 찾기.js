function solution(myString, pat) {
    const mapping = [...myString].map((el) => el == "A" ? "B" : "A").join("")
    return mapping.includes(pat) ? 1 : 0
}