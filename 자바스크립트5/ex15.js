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
// function sol(){
//     let americano = 3500
//     let cafe_latte = 3800;
//     let milk_tea = 4200

//     let price1 = americano * 2 + milk_tea
//     let price2 = (cafe_latte * 2 + milk_tea * 2) * 0.9

//     return price1 + price2

// }

// console.log(sol())



// 1부터 N까지 합의 제곱구하기
// function sol(num){
//     let answer
//     let count = 0;
//     for(let i = 1; i <= num; i++){
//         count += i
//     }
//     answer = count * count
//     return answer
// }

// console.log(sol(10))


//1부터 N까지 합의 제곱구하고 각 제곱근의 합과 차를 구하기
// function sol(num){
//     let answer
//     let answer1
//     let count = 0
//     let count1 = 0;
//     for(let i = 1; i <= num; i++){
//         count += i
//     }
//     for(let j = 1; j <= num; j++){
//         count1 += j*j
//     }
//     answer = count * count  //1부터 num까지 합의 제곱한 값

//     answer1 = count1
//     return answer - answer1
// }

// console.log(sol(10))



// 구슬 꾸러미
// function sol(input){

// }

// console.log(sol())



// 렌터카
function sol(hour, price, defaultPrice, defaultHour, defaultCost){
    let answer1 = hour * price;
    let answer2 = defaultPrice + Math.max(0, Math.ceil((hour - defaultHour)/defaultCost) *defaultCost)

    return Math.min(answer1, answer2)
}

console.log(sol(10, 300, 1500, 6, 200))

// console.log(sol())


// function minimumRentalCost(H, A, B, C, D) {
//     const rentalCompanyA = H * A; // 모자장수 렌터카 비용 (1시간당 A 원)
//     const rentalCompanyB = B + Math.max(0, Math.ceil((H - C) / D) * D); // 코더랜드 렌터카 비용
  
//     return Math.min(rentalCompanyA, rentalCompanyB);
//   }
  
  // 예시 입력
//   const H = 10; // 렌터카를 빌리는 시간 (10시간)
//   const A = 5000; // 모자장수 렌터카 1시간당 요금 (5000원)
//   const B = 10000; // 코더랜드 렌터카 기본 요금 (10000원)
//   const C = 3; // 코더랜드 렌터카 기본 시간 (3시간)
//   const D = 2000; // 코더랜드 렌터카 추가 요금 (1시간당 2000원)
  
//   console.log(minimumRentalCost(10, 5000, 10000, 3, 2000)); // 최소 비용값 출력