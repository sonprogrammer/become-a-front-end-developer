function gugudan(dan){
    for(let i = 2; i < 10; i++){
        for(let j = 1; j < 10; j++){
            if(i === dan){
                console.log(dan + "*" + j +"=" + i*j)

            }
        }
    }
}
console.log(gugudan(8))