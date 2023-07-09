function solution(data){
    let result = []
    for(let i = 1; i <= data; i++){
        if(data & i === 0){
            const divisor = []

            for(let j = 1; j <= i; j++){
                if(i % j === 0 ){ 
                    divisor.push(j)
                }
        }
        result.push(divisor.join(" "))
    }
}

return result.join("\n")
}
console.log(solution(20))