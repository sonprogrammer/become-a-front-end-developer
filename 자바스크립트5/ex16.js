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



// 좋아하는 숫자만 골라내기 
function sol(input){

    let result = []
    let num_tuple = ['2','3','5','6','7','8','9']

    for(let i = 0; i < input.length; i++){
        let num = Number(input[i])
        if(num_tuple.includes(num)){
            result.push(num)
        }
        if(result.length === 5){
            break;
        }
    }
    return result

}
console.log(sol("1, 3, 4,1"))