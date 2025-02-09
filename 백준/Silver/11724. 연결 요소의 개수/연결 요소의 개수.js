const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(el => el.split(' ').map(Number));

const graph = Array.from({ length: n + 1 }, () => []);

arr.forEach(([a, b]) => {
  graph[a].push(b);
  graph[b].push(a);
});

const visited = Array.from({ length: n + 1 }, () => false);

function dfs(v) {
  visited[v] = true;

  for (let i of graph[v]) {
    if (!visited[i]) {
      dfs(i);
    }
  }
}

let cnt = 0;

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
    cnt++;
  }
}

console.log(cnt);
