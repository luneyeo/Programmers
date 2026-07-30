const solution = (string) => {
    return [...string].map((el) => el === el.toUpperCase()
       ? el.toLowerCase()
       : el.toUpperCase()).join("")
}