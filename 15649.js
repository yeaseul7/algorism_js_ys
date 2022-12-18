// const fs = require('fs');
// let input= fs.readFileSync('/dev/stdin').toString().trim().split(' ').map((v)=>Number(v));
// const visited = Array.from({length : input[0]+1},()=>0); //다녀왔다는 배열 만들기
// let temp =[]; //출력할 임의 배열 만들기

// function DFS(L){
//    if(L===input[1]){
//       console.log(temp.join(" "));
//    }else{
//       for(let i=1; i<=input[0]; i++){  //첫번째는 비워둔다.
//          if(visited[i]===0){  //i번째가 0이라면
//             temp.push(i); //임의의 배열에 i를 넣는다.
//             visited[i]=1;//그리고 다녀갔다고 1을 넣어 표시해준다.
//             DFS(L+1); //그 다음으로 재귀함수 사용 여기서 
//             temp.pop(); //위의 함수가 끝나면 실행되는 것 지워줘야됨
//             visited[i]=0; //위의 경우와 비슷
//          }
//       }
//    }
// }
// DFS(0);