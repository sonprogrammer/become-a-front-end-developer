// 3의 배수에 박수치기
// function sol(input){
//     let num = Number(input)

//     if((num+1) % 3 == 0){
//         return "짝"
//     }else{
//         return input+1
//     }
// }
// console.log(sol(11))

// 
// function solution(input) {
//     let answer = []
//     let count = 0;
//     // answer = input.split(', ')
//     for(let i = 0; i <= input.length; i++){
//         if(input[i] === '커피'){
//             count++
//         }
//     }
//       return count;
//     }

// console.log(solution(['과자', '과자', '과자', '커피', '과자', '웩', '음료수', '음료수', '과자', '커피', '커피', '커피','웩']))





// 주문내용 계산하기
function sol(){
    let americano = 3500
    let cafe_latte = 3800;
    let milk_tea = 4200

    let price1 = americano * 2 + milk_tea
    let price2 = (cafe_latte * 2 + milk_tea * 2) * 0.9

    return price1 + price2

}

console.log(sol())