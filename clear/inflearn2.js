//삼각현 만들기 조건
//가장 긴 변의 길이가 나머지 변의 길이들끼리 합한것 보다 작아야됨.

const fs = require("fs");
let input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));
  //입력 값 추출

input.sort((a, b) => b - a);
//시간 복잡도를 위해 => sort는 시간복잡도 O(nlogn)임

if (input[0] < input[1] + input[2]) {
  console.log("Yes");
  return;
}
console.log("No");
