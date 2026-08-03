function solution(pn) {
    return [...pn].map((el, index) => index < pn.length - 4 ? "*" : el).join("")
}