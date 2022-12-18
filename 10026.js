// const fs = require("fs");
// let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

// const width = input
//   .shift()
//   .split("")
//   .map((v) => Number(v));

// const dx = [1, 0, -1, 0]; //이동
// const dy = [0, -1, 0, 1];

// let graph = [];
// for (let i = 0; i < width; i++) {
//   graph[i] = input.shift().split("");
// }
// console.log(graph);

// let num = 0;

// function DFS(x, y) {
//   for (let i = 0; i < width; i++) {
//     const nx = x + dx[i]; //x가 0부터 사작하니까
//     const ny = y + dy[i];
//     if (nx >= 0 && ny >= 0 && nx < width && ny < width) {
//       //그래프상 nx와 ny가 0보다 작으면 안됨, 그래프를 넘어가면 안되니까 넘어가도 안됨
//       if (graph[ny][nx] === "R") {
//         num++;
//         graph[ny][nx] = "null"; //얘를 0으로 바꿔줘야 반복되지 않음
//         DFS(nx, ny); //dx[i]와 dy[i]가 추가된 후어야 하니까 nx, ny를 넣어주는 것
//         if (graph[ny][nx] === "R") {
//         answer++;
//         }
//     }
//     }
//   }
// }
// console.log(width);
