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
function sol(input){
    let answer = []
    for(let i = 1; i <= input; i++){
        if((i % 10) % 3 == 0 && i % 10 != 0){
            answer.push("짝")
        }else if(Math.floor((i / 10) % 3) == 0 && Math.floor(i / 10) != 0){
            answer.push("짝")
        } else{
            answer.push(i)
        }
    }
    return answer
}

console.log(sol(30))