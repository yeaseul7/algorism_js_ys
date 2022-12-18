<<<<<<< HEAD
// const fs = require("fs");
// let input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');
// let [size, num] = input.shift().split(' ').map(Number); //size랑 num으로 split등 이용해서 넣기
// let list = input.shift().split(' ').sort(); //shift해서 배열 그대로 넣기
// let temp = []; //출력할 임의 배열 만들기
// let vowel = ["a", "e", "i", "o", "u"];

// function dfs(arr, start) {
//   //dfs함수가 시작한다.
//   if (arr.length === size) { //배열의 길이가 size일때
//     let count = 0; //count는 모음의 개수
//     for (let i = 0; i < arr.length; i++) {
//       if (vowel.includes(arr[i])) {
//         count++; //모음이 있다고 확인되면 모음의 개수 추가
//       }
//     }
//     if (count > 0 && size - count > 1) {
//       //모음이 1개 이상 자음은 2개 이상
//       temp.push(arr);
//     }
//     return;
//   } else { //arr의 길이가 4가 되기 전에
//     for (let i = start; i < num; i++) { //ex)0부터x start부터 
//         dfs(arr+list[i], i+1); //그 다음으로 재귀함수, 배열에 그대로 추가해버리기
//     }
//   }
// }
// dfs("", 0);

// console.log(temp.join('\n'));
=======
const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');
let [size, num] = input.shift().split(' ').map(Number); //size랑 num으로 split등 이용해서 넣기
let list = input.shift().split(' ').sort(); //shift해서 배열 그대로 넣기
let temp = []; //출력할 임의 배열 만들기
let vowel = ["a", "e", "i", "o", "u"];

function dfs(arr, start) {
  //dfs함수가 시작한다.
  if (arr.length === size) { //배열의 길이가 size일때
    let count = 0; //count는 모음의 개수
    for (let i = 0; i < arr.length; i++) {
      if (vowel.includes(arr[i])) {
        count++; //모음이 있다고 확인되면 모음의 개수 추가
      }
    }
    if (count > 0 && size - count > 1) {
      //모음이 1개 이상 자음은 2개 이상
      temp.push(arr);
    }
    return;
  } else { //arr의 길이가 4가 되기 전에
    for (let i = start; i < num; i++) { //ex)0부터x start부터 
        dfs(arr+list[i], i+1); //그 다음으로 재귀함수, 배열에 그대로 추가해버리기
    }
  }
}
dfs("", 0);

console.log(temp.join('\n'));
>>>>>>> main
