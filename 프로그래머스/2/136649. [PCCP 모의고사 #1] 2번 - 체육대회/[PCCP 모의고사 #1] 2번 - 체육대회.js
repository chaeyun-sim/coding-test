function solution(ability) {
  const visited = new Array(ability[0].length).fill(false);
  const selected = [];
  let max = -Infinity;

  function dfs(depth) {
    if (depth === ability[0].length) {
      const arr = selected.map((num, i) => ability[num][i]);
      const sum = arr.reduce((a, b) => a + b);
      max = Math.max(sum, max);
      return;
    }

    for (let i = 0; i < ability.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      selected.push(i);
      dfs(depth + 1);
      selected.pop();
      visited[i] = false;
    }
  }

  dfs(0);
  return max;
}
