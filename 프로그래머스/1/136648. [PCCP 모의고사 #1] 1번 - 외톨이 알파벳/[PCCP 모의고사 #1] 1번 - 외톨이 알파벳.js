function solution(input_string) {
  const arr = [];

  for (let i = 1; i <= input_string.length; i++) {
    if (input_string[i - 1] !== input_string[i]) {
      arr.push(input_string[i - 1]);
    }
  }

  const result = new Set();
  arr.forEach((num, i) => {
    if (arr.slice(i + 1).includes(num)) result.add(num);
  });

  if (result.size) {
    return [...result].sort((a, b) => a.localeCompare(b)).join('');
  }

  return 'N';
}
