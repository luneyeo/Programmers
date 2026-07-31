// const solution = (num_list) => {
//   const last = num_list[num_list.length - 1];
//   const prev = num_list[num_list.length - 2];

//   last > prev ? num_list.push(last - prev) : num_list.push(last * 2);
//     return num_list
// };
const solution = (num_list) => {
    const [a, b] = [...num_list].reverse();
    return [...num_list, a > b ? a - b : a * 2]
}