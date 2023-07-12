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

// 음식 가격 계산하기
// function sol(){
//     let korean = 6300
//     let chiness = 6000
//     let p = 8500
//     return korean * 55 + chiness * 43 + p * 52;
// }

// 변수 비교하기
// function sol(){
//     let a = 10
//     let b = 10
    
//     let case1 = (a ==b)
//     let case2 = (a === b)
//     b = "10"
//     let case3 = (a == b)
//     let case4 = (a ===b)

//     return {case1, case2, case3, case4}
// }


// 변수 다루기
// function sol(){

//     let num = 123
//     num +=204
//     let str = 'he '
//     str += 'elice!'
//     return {num, str}
// }

// 소수의 합 구하기
function sol(input){
    let answer = []
    let sum
    for(let i = 1; i <= input; i++){
        if(input % i == 0 && input % 2 != 0 ){
            answer.push(i)
        }
        if(input == i){
            sum += input
        }
    }
    return answer
}

console.log(sol(9))
