// 마천루 문제
// function sol(input){
//     let result = ''
//     for(let i = 1; i <= input; i++){    //i는 층수임
//         for(let j = 0; j < (i <= 5 ? i : 5); j++){ //j는 별모양찍어줌
//             result += "*"
            
//         }
//         result += "\n"
//     }
//     return result
// }

// console.log(sol(7))



//문자열 검사하기
// function sol(str){
//     let result = ''
//     for(let i = 0; i < str.length / 2; i++){
//         if(str[i] === str[str.length - 1 - i]){ //-1을 하는 이유는 6번째 글자의 인덱스는 5기때문임 0번째 인덱스는 5번째 인덱스랑 비교하고 1번째 인덱스는 4번째 인덱스와 비교함
//             result += 'same\n'
//         }else{
//             result += 'different\n'
//         }
//     }
//     return result
// }

// console.log(sol('abcdba'))



// 커피 계산하기
// function sol(input){

//     let menuPrice = {"아메리카노" : 4100, "카페라떼" : 4500, "카라멜마끼야또" : 5100}
//     let totalPrice = 0;

//     for(let i = 0; i < input.length; i++){
//         let order = orders[i]
//         totalPrice +=menuPrice
//     }
//     return totalPrice
// }
// console.log(sol("아메리카노"))


// function calculateTotalPrice(input) {
//     const menuPrices = {
//       "아메리카노": 4100,
//       "카페라떼": 4600,
//       "카라멜마끼야또": 5100,
//     };
  
//     let totalPrice = 0;
  
//     for (let i = 0; i < input.length; i++) {
//       const order = input[i];
//       if (menuPrices[order] !== undefined) {
//         totalPrice += menuPrices[order];
//       } else {
//         console.log(`주문한 메뉴(${order})는 메뉴에 없습니다.`);
//       }
//     }
  
//     return totalPrice;
//   }
  
// function solution(input) {
//     let menuPrice = {"아메리카노": 4100, "카페라떼":4600, "카라멜마끼아또": 5100};

//     let totalPrice = 0;

//     for(let i = 0; i < input.length; i++){
//         let order = input[i]
//         if(menuPrice[order] !== undefined){
//             totalPrice += menuPrice[order]
//         }
//     }
//     return totalPrice
//   }
//   // 예시
//   const input = ["아메리카노", "카페라떼", "카라멜마끼야또", "아메리카노"];
//   const total = solution(input);
//   console.log(`총 가격: ${total}원`);
  


// // 반쪽 피라미드 만들기
// function sol(num){
//     let answer = ''
//     for(let i = 1; i <= num; i++){
//         for(let j = num; j > i; j--){
//             answer += " "
//         }for(let j = 1; j <= i; j++){
//             answer += "*"
//         }
//         if(i !== num){
//         answer +=  "\n"
//         }
//     }
//     return answer
// }

// console.log(sol(7))


// 잘린 피라미드 만들기

// a부터 a숫자만큼 별을 그린후 다음숫자만큼 그 아랫줄에 별을 그리고 b까지 이러한 방식으로 별을 그린다
function sol(a, b){
    let answer=''
    // 제일 위에 a수만큼 별 만들기 그리고 \n해주기 b수까지 반복
    for(let i = 1; i <= (b-a)+1; i++){    //i는 층수니깐 ex) 5-3하면 별3개층 4개층 5개층 총 3개층으로됨
        for(let j = a; j >= i; j++){
            answer += "*"
        }
        if(i === a){
            answer += "\n"
        }else{
        answer += "*"
        }
    }
    return answer
}

console.log(sol(3, 5))