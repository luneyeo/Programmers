const solution = (num_list) => {
  const sum = num_list.reduce((a, c) => a + c, 0);
  const product = num_list.reduce((a, c) => a * c, 1);

  if (product < Math.pow(sum, 2)) return 1;
  else return 0;
};