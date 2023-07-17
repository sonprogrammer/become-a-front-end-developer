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
function sol(input){
    let answer = 0;
    
    let number = input.split(" ")
    let a = number[0]
    let b = number[1]
    let c = number[2]
    let d = number[3]
    
    answer = (a <= b && a ==d && b > c && c < 6) || (a == b && a == c && a == d);
    return answer
}


console.log(sol("2 2 2 2"))