// 삼각형 나머지 각 구하기
// function solution(angle) {
//     let angles = angle.split(" ");
//     console.log(angles);
    
//     let one = Number(angles[0]);    //Number는 문자를 숫자로 변환 왜냐면 매개변수값을 전해줄때 "100 100"이런식으로 전달해주기 때문
//     let two = Number(angles[1]);
//     let triangle = 180;
//     let other = triangle - (one + two);
    
//     if (one + two >= triangle) {
//       return 0;
//     }  
//     return other;
//   }
  
//   console.log(solution("100 100"));
  


//가장 큰 숫자 구하기
// function findMaxDigit(number) {
//     const numberString = String(number);
//     let maxDigit = Number(numberString[0]);
  
//     for (let i = 1; i < numberString.length; i++) {
//       const digit = Number(numberString[i]);
//       if (digit > maxDigit) {
//         maxDigit = digit;
//       }
//     }
  
//     return maxDigit;
//   }
  
//   const inputNumber = 58291;
//   const maxDigit = findMaxDigit(inputNumber);
//   console.log("가장 큰 자릿수:", maxDigit);


//가장 큰 숫자 구하기(2)
// function sol(input){
//     let numberString = String(input)    //input으로 받은 숫자를 문자열로 바꾸는 작업
//     let maxdigit = 0;
//     for(let i = 0; i < numberString.length; i++){
//         let digit = parseInt(numberString[i])            //parseInt는 문자열을 정수로 반환함
//         if(digit > maxdigit){    
//             maxdigit = digit;
//         }
//     }
//     return maxdigit

// }

// console.log(sol(12321))


// 가장 높은자리의 숫자 구하기
// function sol(input){
//     let numberString = String(input)
//     let hight = numberString[0]

//     return hight
// }

// console.log(sol(139304))