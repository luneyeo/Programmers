const solution = (hp) => {
  let count = 0;

  count += Math.floor(hp / 5); // 장군개미
  hp %= 5;

  count += Math.floor(hp / 3); // 병정개미
  hp %= 3;

  count += hp; // 일개미 (남은 건 전부 1)

  return count;
};