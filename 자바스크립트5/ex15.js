// 3의 배수에 박수치기
function sol(input){
    let answer = 0;

    if((input+1) % 3 == 0){
        return "짝"
    }else{
        return input+1
    }
}
console.log(sol(3))