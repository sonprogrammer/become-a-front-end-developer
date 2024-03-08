function solution(a){
let num = 0; //합한 값을 위한 변수


for(let i = 2; i <= a; i++){
    let Check = true;   //Check는 소수인지 판별하는 변수
    for(let j = 2; j < i; j++){
        if(i % j == 0){
            Check = false;
            break;
        }
    }
    if(Check === true){
        num += i
    }
}
return num;
}
console.log(solution(1000))