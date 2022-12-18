<<<<<<< HEAD
// const fs = require("fs");
// let input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');
// let [N, S]=input.shift().split(' ').map(Number);
// let arr = input.shift().split(' ').map(Number);
// let answer=0;

// function DFS(L, sum) {
//     if(L===N){
//         if(sum===S) answer++;
//         return;
//     }else{
//         DFS(L+1, sum + arr[L]);
//         DFS(L+1, sum);
//     }
// }
// DFS(0,0);
// if(S===0){
//     answer--;
// }

// console.log(answer);
=======
const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');
let [N, S]=input.shift().split(' ').map(Number);
let arr = input.shift().split(' ').map(Number);
let answer=0;

function DFS(L, sum) {
    if(L===N){
        if(sum===S) answer++;
        return;
    }else{
        DFS(L+1, sum + arr[L]);
        DFS(L+1, sum);
    }
}
DFS(0,0);
if(S===0){
    answer--;
}

console.log(answer);
>>>>>>> main
