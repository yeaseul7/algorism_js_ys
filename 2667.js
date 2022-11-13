const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');

let answer; //단지 수 나타내는 것

const dx = [1, 0, -1, 0]; //이동
const dy = [0, -1, 0, 1];
const firstWidth = input.shift().split().map((v)=>Number(v));
const width = firstWidth[0];
const height = width;
let graph = Array.from(Array(width), () => Array(height).fill(null));

for(let i=0; i<width; i++){
    input.shift().split().map((v)=>Number(v))
    console.log(input);
}

console.log(width);

let size = 0; //출력할 섬의 사이즈

function DFS(x,y){
    for(let i=0; i<4; i++){
        const nx = x + dx[i]; //x가 0부터 사작하니까
        const ny = y + dy[i];
        if(nx >=0 && ny>=0 && nx < width && ny <height){ //그래프상 nx와 ny가 0보다 작으면 안됨, 그래프를 넘어가면 안되니까 넘어가도 안됨
            if(input[ny][nx] ===1 ) // 만약 1이면 섬이라는 뜻
            size++; //크기 추가
            input[ny][nx]=0; //얘를 0으로 바꿔줘야 반복되지 않음
            DFS(nx, ny); //dx[i]와 dy[i]가 추가된 후어야 하니까 nx, ny를 넣어주는 것
        }
    }
}
