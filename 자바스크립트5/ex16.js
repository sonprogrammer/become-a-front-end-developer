// 마천루 문제
// function sol(input){
//     let result = ''
//     for(let i = 1; i <= input; i++){    //i는 층수임
//         for(let j = 0; j < (i <= 5 ? i : 5); j++){ //j는 별모양찍어줌
//             result += "*"
            
//         }
//         result += "\n"
//     }
//     return result
// }

// console.log(sol(7))



//문자열 검사하기
function sol(str){
    let result = ''
    for(let i = 0; i < str.length / 2; i++){
        if(str[i] === str[str.length - 1 - i]){ //-1을 하는 이유는 6번째 글자의 인덱스는 5기때문임 0번째 인덱스는 5번째 인덱스랑 비교하고 1번째 인덱스는 4번째 인덱스와 비교함
            result += 'same\n'
        }else{
            result += 'different\n'
        }
    }
    return result
}

console.log(sol('abcdba'))