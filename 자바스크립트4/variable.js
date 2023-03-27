
//whole script strickt mode syntax
// javascript is very flexible
// flexiable === dangerous
'use strict';

// variable (변수===변경될수 있는 값)

//block scope : 대괄호안에 있는건 밖에 서 못씀
//let -->변수 선언 mutable타입, read(읽기),write(쓰기) 가능함
{
let name = 'youngjin';      
console.log(name);  
name = 'hello';
console.log(name);
}

console.log(name); //출력안됨   

//var --> don't ever use this why? 값을 선언하기도전에 쓸수 있다(이러한 것을 var hoisting이라함),block scope이 없음
confirm.log(age);
age = 4;
var age;


//constant(상수) --> immutable타입, read(읽기)만 가능함
const dayInWeek = 7;

// template literals(string)
const helloson = `hi${youngjin}!`;
console.log(`values: ${helloson}, type: ${typeof helloson}`);

//object,real-lif object, data structure
const youngjin = {name: 'youngjin', age: 27};
youngin.age = 21; // 가능



//dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h출력
console.log(`value: ${text}, type: ${typeof text}`);
text =1;

// 