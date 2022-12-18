// const fs = require("fs");
// let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

// let arr = input
//   .shift()
//   .split(" ")
//   .map((v) => Number(v));
// let height = arr[0]; //3
// let width = arr[1]; //6

// let answer = 0;

// let alpha = new Set();

// let graph = [];
// for (let i = 0; i < input.length; i++) {
//   graph[i] = input[i].split("");
// }

// const dx = [0, 1, 0, -1, 0];
// const dy = [0, 0, -1, 0, 1];

// function DFS(y, x, cnt) {
//     answer = Math.max(answer, cnt);
//   for (let i = 0; i < 5; i++) {
//     let nx = x + dx[i];
//     let ny = y + dy[i];
//     if (nx >= 0 && ny >= 0 && nx < width && ny < height) {
//       if (!alpha.has(graph[ny][nx])) {
//         alpha.add(graph[ny][nx]);
//         DFS(ny, nx, cnt+1);
//       }

//     }
//   }
// }
// DFS(0, 0, 1);

// console.log(graph);
// console.log(alpha);
// console.log(answer);
