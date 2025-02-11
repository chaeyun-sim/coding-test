const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const [a, b] = input[1].split(' ').map(Number);
const arr = input.slice(3).map(el => el.split(' ').map(Number));

const graph = Array.from({ length: n + 1 }, () => []);

arr.forEach(([x, y]) => {
  graph[x].push(y);
  graph[y].push(x);
});

const visited = Array.from({ length: n + 1 }, () => false);
let result = -1;
let flag = false;

function dfs(node, depth) {
  visited[node] = true;

  if (node === a) {
    result = depth;
    flag = true;
    return;
  }

  graph[node].forEach(num => {
    if (!visited[num]) {
      dfs(num, depth + 1);
      if (flag) return;
    }
  });
}

dfs(b, 0);

console.log(result);