function solution(my_string) {
    let string = my_string;
    ["a", "e", "i", "o", "u"].forEach((alpha) => {
        string = string.replaceAll(alpha, "")
    })
    return string
}