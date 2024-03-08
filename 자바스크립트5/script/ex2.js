function fun(input){
    let answer= ' '
    for(let n in input){
        answer += input[n]
    }
    return parseInt(answer)
}
console.log(fun([1,88, 0,0]))