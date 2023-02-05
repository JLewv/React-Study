const fs = require("fs");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const dist = Array.from({ length: N + 1 }, () => 0);
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  dist[b]++;
}

const queue = [];
for (let i = 1; i <= N; i++) {
  if (dist[i] === 0) {
    queue.push(i);
  }
}
// 0 : 1 , 1 : 2
let idx = 0;
while (idx < queue.length) {
  const node = queue[idx];
  graph[node].forEach((i) => {
    dist[i]--; // 3의 거리 : 1 => 0
    if (dist[i] === 0) {
      queue.push(i);
    }
  });
  idx++;
}

console.log(queue.join(" "));
// idx 0 : node 1, 1 2 // 2 3
