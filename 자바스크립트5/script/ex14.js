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
//  //밑에를 예를들어 설명해보면 input값이 134이면 numberString.length는 3된다.i는 0부터돌고 numberString[0]값인 1이 처음에 가장 큰숫자로 갱신된다(여기서 Maxdigit은 처음 0으로 초기화되어있음)
// // 그리고 i가 1이되면 numberString[1]인 3이되고 maxdigit에 갱신되어 저장된다
// //그리고 i가 2가 되면 numberString[2]인 4가 되고 maxdigit에 갱신되어 저장되고 그 마지막값이니깐 그게 return됨

//    for(let i = 0; i < numberString.length; i++){
//         let digit = parseInt(numberString[i]) //parseInt는 문자열을 정수로 반환함, 
//         if(digit > maxdigit){    //더 높은 숫자가 들어오면 maxdigit에 갱신되어 저장된다  
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



// 배수 판별하기
// 아래처럼 else if가 아니라 if문으로 한 이유는 각 배수에 대한 조건을 서로 독립적으로 확인하고
// 모든 해당 조건들을 answer배열에 추가해야하기 때문-->왜그러냐면 esle if를 쓰게 되면 나머지는 무시되고 실행이되지 않기 때문
// function solution(num) {
//     let answer = [];
//     if(num % 2 == 0){
//         answer.push("2의 배수입니다.")
//     } if(num % 3 == 0){
//         answer.push("3의 배수입니다.")
//     } if(num % 5 == 0){
//         answer.push("5의 배수입니다.")
//         answer.join('\n')
//     } if(num % 7 == 0){
//         answer.push("7의 배수입니다.")
//     }
//     if(answer.length >= 2){ //다른 if문에서도 배수가 존재한다면 (2개 이상의 배수가 될수 있으니깐 예를 들어 10은 2, 5의 배수가 될수 있으니깐)
//         return answer.join("\n")    //join 메소드로 2개이상이 들어가면 몇의 배수입니다.하고 다음줄에 몇의배수입니다가 출력됨
//     }else{
//         return answer;
//     }
//   }

//   console.log(solution(10))


//중간값 출력하기
// function solution(input) {
//     let answer = []
//     let num = input.split(" ")
   
//     answer.push(num[1])
  
//     return answer;
//   }

//   console.log(solution("1 2 3"))


//중간값 출력하기 (2)
function solution(input) {
    let answer = []
    let num = input.split(" ")

    let middleIndex = Math.floor(num.length / 2) // 총길이가 3이면 3/2 = 1.5인데 math.floor(내림)으로 1이됨 --> 즉 인덱스 1의 값을말함
    // answer.push(num[middleIndex])
    answer = Number(num[middleIndex])
  
    return answer;
  }

  console.log(solution("1 7 3"))