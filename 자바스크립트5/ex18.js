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

// 노동용
// function sol(input){
//     let answer = []
//     for(let i = 0; i < input.length; i++){
//         if(input[i] === ' '){
//             answer += '링디기디기\n'
//         }else if(input[i] === '.'){
//             answer += '딩딩딩\n'
//         }
//     }
//     return answer
// }
// console.log(sol('나는 손 영진 이다.'))



// 변수다루기
// function sol(num, string){
//     num += 204
//     string +='elice!'
//     return {num, string}
// }
// console.log(sol('num:, string: '))


// 소수 합구하기
// function sol(input){
//     let answer 
//     let sum = 0;
//     for(let i = 2; i <= input; i++){
//         let isPrime = true
//         for(let j = 2; j < i; j++){
//             if(i % j == 0){
//                 isPrime = false
//                 break
//             }
//         }
//         if(isPrime){
//             sum += i
//         }
//     }
//     return sum
// }
// console.log(sol())

// function sol(input){
//     let answer 
//     if(input % 2 == 0){
//         answer = "\'even\'"
//     }else{
//         answer = '\"odd\"'
//     }
//     return input + ':' + answer

// }
// console.log(sol(11))


// 삼각형 각도 구하기
// function sol(input){

//     let angle = 0;
//     let totalAngle = 180
//     let a = input.split(' ')
//     let b = Number(a[0])
//     let c = Number(a[1])
//     angle = 180 - (b + c)
// if(b+c >=180){
//     return 0
// }

//     return angle
    
// }
// console.log(sol('10 140'))

// 배수 판별기 
// function solution(num) {
//     let answer = [];
//     if(num % 2 == 0){
//         answer += "2의 배수입니다.\n"
//     } if(num % 3 == 0){
//         answer += "3의 배수입니다.\n"
//     } if(num % 5 == 0){
//         answer += "5의 배수입니다.\n"
//       //   answer.join('\n')
//     } if(num % 7 == 0){
//         answer += "7의 배수입니다.\n"
//     }
//    return answer
//   }

// function solution(num) {
//     let answer = [];
//     if (num % 2 == 0) {
//         answer.push("2의 배수입니다.");
//     }
//     if (num % 3 == 0) {
//         answer.push("3의 배수입니다.");
//     }
//     if (num % 5 == 0) {
//         answer.push("5의 배수입니다.");
//     }
//     if (num % 7 == 0) {
//         answer.push("7의 배수입니다.");
//     }
//     if (answer.length >= 2) {

//         return answer.join("\n");
//     } else {
//         return answer;
//     }
// }

// console.log(solution(10));


// 가운데 숫자
// function sol(input){
//     let answer = ""
//     let num = input.slice(" ")

//     let middleIndex = Math.floor(num.length /2)
//     answer = Number(num[middleIndex])
//     return answer
// }

// console.log(sol())


//3,6,9다음 숫자 말하기
// function sol(input){
//     let answer =""
//     if((input+1) % 3 === 0){
//             answer += "짝"
            
//         }else{
//             answer += (input+1)
            
//         }
    
//     return answer
// }
// console.log(sol(4))


// 도도새
// function sol(input){
//     let count = 0;
//     for(let i = 0; i <= input.length; i++){
//         if(input[i] === "웩"){
//             count++
//         }
//     }
//     return count
// }
// console.log(sol())


// 제곱근과 합의 제곱 차구하기
// function sol(input){
//     let answer //합의 제곱
//     let count = 0 //input까지 합
//     let answer2 //제곱근
//     let count1 = 0
//     for(let i = 1; i <=input; i++){
//         count += i
//     }
//     for(let j = 1; j <= input; j++){
//         count1 += j*j
//     }
//     answer = count * count
//     answer2 = count1

//     return answer - answer2
// }

// console.log(sol(10))


// 마천루
// function sol(input){
//     let result = ''
//     for(let i = 1; i<=input; i++){
//         for(let j = 0; j < (i <= 5 ? i : 5); j++){
//             result += "*"
//         }
//         if(input != i){
//         result += "\n"
//         }
//     }
//     return result
// }
// console.log(sol(15))

