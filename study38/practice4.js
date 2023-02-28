//for문 이용
/*
let current = 1;
let previous = 0;

for(let i = 1; i<= 50; i++){
    console.log(current);
    let temp = previous; //previous를 임시 보관소 temp에 저장
    previous = current;
    current = current + temp; //temp에는 기존 previous 값이 저장돼 있다
}
*/
//while 문 이용
let current = 1;
let previous = 0;
let i = 1;

while (i <= 50){
    console.log(current);
    let temp = previous; // previous를 임시 보관소 temp에 저장
    previous = current;
    current = current + temp; //temp에는 기존 previous 값이 저장돼 있다.
    i++;
}