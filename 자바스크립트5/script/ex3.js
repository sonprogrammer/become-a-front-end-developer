function triangle(a, b, c){
    let answer
    if((a*a) == (b*b)+(c*c)){
        return true
      }else{
          return false
      }
}

console.log(triangle(5, 3, 4))