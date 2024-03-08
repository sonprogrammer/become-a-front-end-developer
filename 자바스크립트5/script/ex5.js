function solution(data){
    let names = data.split(" ")
    let result = []
    for(let i =0; i < names.length; i++){
        if(result.includes(names[i]) == false){
            result.push(names[i])
        }
    }
    return result.join(" ")
}

console.log(solution(''))