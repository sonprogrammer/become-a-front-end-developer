// 1번
// function sol(){
//     return "Hi, youngjin"
// }

// 2번
// function sol(){
//     return "400\nbus\nlike"
// }

//3번
// function sol(){
//     return "\"I'm youngjin\""
// }

//4번
// function sol(){

//     let num = 400;
//     let str = "bus"
//     let str1 = "like"
//     return num + ' '+ str + " " + str1
// }

// 5번
// function sol(){
//     let num = 1
//     let num1 = 2

//     let a = "1"
//     let b = "2"
//     return [num + num1, a + b]
// }

//6번
// function sol(input){
//     let answer = []
//     answer = input.split('\n')
//     return answer
// }



// 7번 번외 문제 -- input을 입력하면 그 자료형을 표현해주고 값을 출력해줌
// function sol(input){
//     let answer = []
//     // let a = input
//     answer.push(typeof input)
//     answer.push(input)
//     return answer
// }

     
// console.log(sol(333))

function sol(input){
    let answer = []
    let a = input.split('')
    answer.push(typeof(a))
    answer.push(a[2])
    return answer

}

console.log(sol('hello youngjin'))
