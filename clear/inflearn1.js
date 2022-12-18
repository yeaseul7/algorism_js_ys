const fs = require('fs');
let input= fs.readFileSync('./dev/stdin').toString().trim().split(' ').map((v)=>Number(v));
let answer = 0;

for(let i=0;i<input.length; i++){
  if(input[i]<input[i+1]){
    input[i+1] = input[i];
    answer= input[i];
  }
}
console.log(answer);
//3개의 수에서 제일 작은것 골라내기