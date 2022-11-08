const { count } = require("console");
const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');
let [size, num] = input.shift().split(' ').map(Number); //size랑 num으로 split등 이용해서 넣기
let arr = input.shift().split(' ').sort(); //shift해서 배열 그대로 넣기
let temp = []; //출력할 임의 배열 만들기
let vowel = ["a", "e", "i", "o", "u"];

function dfs(arr, start) {
  //dfs함수가 시작한다.
  if (arr.length === size) {
    //ex) 0이 4이면? -> 아니다 ->17줄로
    let count = 0; //count는 모음의 개수
    for (let i = 0; i < arr.length; i++) {
      if (vowel.includes(temp[i])) {
        count++; //모음이 있다고 확인되면 모음의 개수 추가
      }
    }
    if (count > 0 && size - count > 1) {
      //모음이 1개 이상 자음은 2개 이상
      temp.push(arr);
    }
    return;
  } else {
    for (let i = start; i < num; i++) {
      //ex) num=7번을 돈다
      if (visited[i + 1] === 0) {
        //1번째가 0이라면
        temp.push(input[i]); //임의의 배열에 input[i]를 넣는다.
        visited[i + 1] = 1; //그리고 다녀갔다고 1을 넣어 표시해준다.
        dfs(L + 1); //그 다음으로 재귀함수 사용 여기서
        temp.pop(); //위의 함수가 끝나면 실행되는 것 지워줘야됨
        visited[i + 1] = 0; //위의 경우와 비슷
      }
    }
  }
}
dfs(" ", 0);
