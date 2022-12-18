// const fs = require("fs");
// let input = fs
//   .readFileSync("./dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => Number(v));

// let n = input.length; //노드 수
// let visitied = Array.from({ length: 3 }, () => 0); //[0,0] 배열 만들기
// let answer = []; //출력할 배열
// const min = Math.min.apply(null, input); // 배열에서 최솟값

// //루트보다 커지면 오른쪽 서브트리
// let rightSubRootList = [];
// for (let i = 0; i < n; i++) {
//   if (input[0] < input[i]) {
//     rightSubRootList.push(input[i]);
//     rightSubRoot = rightSubRootList[0];
//   }
// }

// //완쪽 서브 트리
// let temp = [];
// for (let i = 1; i < input.indexOf(rightSubRootList[0]); i++) {
//   temp.push(input[i]);
// }


// for(let i=0; i<temp.length; i++) {
//   answer.push(temp.shift());
//   answer.push(temp.pop(input[temp.length - 1]));
// }
// // answer.reverse();
// console.log(answer);
