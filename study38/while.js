/*
//while문 사용법
while (조건부분){
    동작부분
}

1.
let i = 1;

while (i <= 10) {
    console.log(`${i} 손영진 최고!`);
    i++;
}

for (let i = 1; i <= 10; i++) {
    console.log(`${i} 손영진 짱`)
}

2.
let i = 30;

while (i % 7 !== 0) {
    i++;
}

console.log(i);
3.
let i = 1;

while (i <= 100) {
    console.log(i);
    i += 2;;
}
*/
const N = 180;

let i = 1;
let count = 0;
while (i <= N) {
    if (N % i === 0) {
        console.log(i);
        count++;
    }
    i++;
}
console.log(`${N}의 약수는 총 ${count}개입니다.`);