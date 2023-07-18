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



// 16번 - 음식가격 계산
// function sol(){
//     let answer = 0
//     let korean = 6300
//     let chinese = 6000
//     let wester = 8500
//     let total = korean * 55 + chinese * 43 + wester * 52
//     return total
// }

// console.log(sol())



// 17번 - 변수비교하기
// function sol(){
//     let a = 10 
//     let b = 10
//     case1 = (a == b)
//     case2 = (a === b)

//     b = "10"
//     case3 = (a == b)
//     case4 = (a === b)
//     return {case1, case2, case3, case4}
// }

// console.log(sol())



// 18번 - 변수다루기
// function sol(num, string){
//     num += 284
//     string += "son"

//     return {num, string}
// }

// console.log(sol(290, "영진"))



// 19번 - 소수합구하기

// function sol(input){
//     let sum = 0;
//     let answer = []
//     for(let i = 2; i <= input; i++){
//         let isPrime = true
//         for(let j = 2; j < i; j++){
//             if(i % j == 0){ //i가 소수가 아닌것찾는거임
//                 isPrime = false
//                 break;  //break하는 이유는 i에 대해서 j의 약수가 2개 이상이면 이미 i는 소수가 아니니깐 자원낭비할필요없다
//             }
//         }
//         if(isPrime ===true){
//             // sum += i
//             answer.push(i)
//         }
//     }
//     // return sum
//     return answer
// }

// console.log(sol(13))




// function sol(input){
//     let sum = 0;
//     for(let i = 2; i <= input; i++){
//         let isPrime = true //isPrime이 true면 i는 소수인것
//         for(let j = 2; j < i; j++){
//             if(i % j === 0){
//                 isPrime = false //i는 소수가 아님
//                 break;
//             }
            
//         }
//         if(isPrime === true){
//             sum += i
//         }
//     }
//     return sum
// }

// console.log(sol(5))



function sol(input){
    let answer = []
    for(let i = 1; i <= input; i++){
        if((i % 10) % 3 == 0 && i % 10 != 0){
            answer.push("짝")
        }else if(Math.floor((i / 10) % 3) == 0 && Math.floor(i / 10) != 0){ //십의자리가 3,6,9중 하나일때
            answer.push("뿍")           
        }else{
            answer.push(i)
        }
    }
    return answer
}

console.log(sol(40))