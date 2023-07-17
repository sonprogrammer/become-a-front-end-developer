// 10번
// function sol(input){
//     if(input >= 1000){
//         console.log("택시")
//     }else if(input >= 500){
//         console.log("버스")
//     }else if(input >= 300){
//         console.log("지하철")
//     }else{
//         console.log('도보')
//     }
// }

// console.log(sol(500))


//11번
// function sol(input){
//     let answer = 0;
    
//     let number = input.split(" ")
//     let a = number[0]
//     let b = number[1]
//     let c = number[2]
//     let d = number[3]
    
//     answer = (a <= b && a ==d && b > c && c < 6) || (a == b && a == c && a == d);
//     return answer
// }


// console.log(sol("2 2 2 2"))


//12번-약수 출력하기 
// function sol(input){
//     let answer = []
//     for(let i = 1; i <= input; i++){
//         if(input % i == 0){
//             answer.push(i)
//         }
//     }
//     return answer
// }

// console.log(sol(120))


// 13번 - 3, 6, 9게임
// function sol(input){
//     let answer = []
//     for(let i = 1; i <= input; i++){
//         if((i % 10) % 3 == 0 && i % 10 != 0){
//             answer.push("짝")
//         }else if(Math.floor((i / 10) % 3) == 0 && Math.floor(i / 10) != 0){
//             answer.push("짝")
//         } else{
//             answer.push(i)
//         }
//     }
//     return answer
// }

// console.log(sol(30))


// 14번 - 숫자출력
// function sol(input){
//     let answer = []
//     for(let i = 1; i <= input; i++){
//         answer.push(i)
//     }
//     return answer
// }

// console.log(sol(5))


// 15번 - 노동요
//첫 시도
// function sol(input){
//     let answer = []
//     if(input === ' '){
//         answer.push("링디기디기\n")
//     }else if(input === '.'){
//         answer.push("딩딩딩\n")
//     }else{
//         answer.push("링딩동 ")
//     }
//     return answer
// }
//@@@설명 +=를 해야지 내가 썻던것에서 추가로 기능이 작동함
// function sol(input){
//     let answer = [] 
//     for(let i = 0; i < input.length; i++){
//         if(input[i] === ' '){
//             answer +="링디기디기\n"
//         }else if(input[i] === '.'){
//             answer += "딩딩딩\n"
//         }else{
//             answer +="링딩동 "
//         }
//     }
//     return answer
// }

// console.log(sol('나는 손영진 입니다......'))

