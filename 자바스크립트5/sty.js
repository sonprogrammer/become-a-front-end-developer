let fruit = "apple"

let fruits = ["apple", "banana", "grape"]

document.write(fruit)
document.write(fruits)


Math.abs(-3)
Math.floor(10.3)
Math.random()
Math.ceil(10.9)

fruits.unshift('cherry')
fruits.push('melon')

fruits.shift()
fruits.pop()


let ab = function( a,  b){
    return a + b
}

document.write(ab(1, 3))    //4출력

function abc(a, b){
    return a * b
}

document.write(abc(4, 3))   //12출력


let obj = {
    name: "youngjin",
    age: 27,
    fun: function(d, e){
        return d + e
    }

}

document.write(obj.name)

obj.name = "son"