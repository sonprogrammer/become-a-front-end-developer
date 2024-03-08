function name1(data){
    let answer = []
    let split = data.split(" ")
    for(let i = 0; i < split.length; i++){
        if(split[i][0] === 'son'){
        answer.push(split[i])
    }
}
return answer.join(" ")
}

console.log(name1('sonyoungjin, kimsu, son1'))