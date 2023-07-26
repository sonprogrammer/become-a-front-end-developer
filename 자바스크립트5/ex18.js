// // n줄 입력받기
// function sol(input){
//     let answer = []
//     answer = input.split('\n')

//     return answer
// }


// 문자열 자르기
// function sol(input){
//     let answer = []
//     a = input.split(' ')
//     answer.push(typeof a)
//     answer.push(a[0])

//     return answer

// }
// console.log(sol('1'))


// 용돈 압수
// function sol(input){
//     let answer = []
//     let a = input.split('bd')
//     return a 
// }


//함수 만들고 호출하기 
// function sol(x, y){
//     return (x + y);
// }

// console.log(sol(1, 2))


// 조건에 맞는 암호
// (a <= b && a == d && b> c && c < 6) || (a == b && a == c && a == d)
// function sol(input){
//     let answer;

//     let num = input.split(' ')
//     let a = num[0]
//     let b = num[1]
//     let c = num[2]
//     let d = num[3]
//     answer = (a <= b && a == d && b> c && c < 6) || (a == b && a == c && a == d)

//     return answer
// }

// console.log(sol('2 2 2 9'))


// 약수 찾기
// function sol(input){
//     let answer = []
//     for(let i = 1; i<=input; i++){
//         if(input % i === 0){
//             answer.push(i)
//         }
//     }
//     return answer
// }

// console.log(sol(489))


// 3, 6, 9게임

// function sol(input){
//     let answer = []
//     for(let i = 1; i <= input; i++){
//         if((i % 10) % 3 ==0 && i % 10 != 0){
//             answer.push("짝")
//         }else if(Math.floor(i / 10) % 3 == 0 && Math.floor(i /10) != 0){
//             answer.push("짝")
//         }else{
//             answer.push(i)
//         }
//     }
//     return answer
// }

// console.log(sol(33))


// 숫자 출력
// function sol(input){
//     let answer = []
//     for(let i = 1; i <= input; i++){
//         answer.push(i)
//     }
//     return answer
// }

// console.log(sol(10))