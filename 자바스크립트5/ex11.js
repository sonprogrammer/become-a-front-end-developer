// remind 3,6,9game
// function sol(input){
//     let result = []
//     for(let i = 1; i <= input; i++){
//         if((i % 10) %3 == 0 && i % 10 != 0){
//             result.push("짝")
//         }else if((Math.floor(i/10) % 3 == 0 && Math.floor(i/10) != 0)){
//             result.push("짝")
//         }
//  // 짝짝이 나오려면 일의 숫자랑 십의자리 숫자가 3, 6, 9가 있어야함 

//         else{
//             result.push(i)
//         }
//     }
//     return result
    
// }

// remind 약수 찾기
// function sol(input){
//     let result = []
//     for(let i =1; i <=input; i++){
//         if(input % i == 0){
//             result.push(i)
//         }
//     }
//     return result
// }

// 숫자 출력
// function sol(input){
//     let answer = []
//     for(let i = 1; i<=input; i++){
//         answer.push(i)
//     }
//     return answer;
// }

// 노동요 엘리스
// function sol(s){
//     let answer = []
//     for(let i = 0; i < s.length; i++){
//         if(s[i] === ''){
//             answer += '링디기디기\n'
//         }else if(s[i] === '.'){
//             answer += '딩딩딩\n'
//         }else{
//             answer += '링딩동 '
//         }
//     }
//     return answer
// }



console.log(sol())
