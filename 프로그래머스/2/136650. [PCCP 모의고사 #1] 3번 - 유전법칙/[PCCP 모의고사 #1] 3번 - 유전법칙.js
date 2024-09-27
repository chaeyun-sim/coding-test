function solution(queries) {
  const species = ['RR', 'Rr', 'Rr', 'rr'];

  function recursive(n, p) {
    if (n === 1) return 'Rr';

    const parent = recursive(n - 1, Math.floor((p - 1) / 4) + 1);

    if (parent === 'Rr') {
      return species[(p - 1) % 4];
    }

    return parent;
  }

  return queries.map(([n, p]) => recursive(n, p));
}
