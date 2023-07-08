function fun(input){
    let k = input.toString()    //toString으로 숫자, 객체, 배열등의 값을 문자열로 반환함
    let answer =[]
    for(let i = 0; i < k.length; i++){
        answer.push((k[i]));
    }

    return answer
}
console.log(fun(12345))