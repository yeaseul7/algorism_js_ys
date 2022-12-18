// const fs = require("fs");
// let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

// let answer = 0;

// let arrcase = input
//   .shift()
//   .split("")
//   .map((v) => Number(v));
// const arr = input
//   .shift()
//   .split(" ")
//   .map((v) => Number(v));
// const width = arr[0];
// const height = arr[1];
// const n = arr[2];

// let graph = [];

// for (let i = 0; i < n; i++) {
//   graph[i] = input[i].split(" ").map((v) => Number(v));
// }

// function DFS(x, y) {
//   for (let i = 0; i < n; i++) {
//     if (graph[x][y] != graph[x + 1][y] && graph[x][y] != graph[x][y + 1]) {
//       answer++;
//     }
//     if (x > width - 1 || y > height - 1) {
//       return answer;
//     } else {
//       DFS(nx, ny);
//     }
//   }
// }

// //입력받기 힘들어서 중단