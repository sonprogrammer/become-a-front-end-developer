// string concatenation
console.log('my' + ' cat ');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation 2의 3승임


// Incremet and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

//Assignment operators
let x = 3;
let y = 6;
x += y; //x = x + y;
x -= y;;
 x *= y;
 x /= y;

//  comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// Logical operators :  ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;
// or은 하나라도 true면 그건 true이다
// and는 모두가 true여야 true이다
// not은 그냥 true를 false로 바꿔주는것이다 false는 true로 바꿔준다

//Equality
const yj = {name: 'youngjin'};
const yj1 = {name: 'youngjin'};
//yj, jy1은 똑같은 데이터가 들어있는 오브젝트이지만 실제로는 메모리에는 yj와 yj1은 각각 다른 레퍼런스가 들어있고 각각 다른 오브젝트를 갖고 있다 
// ===은 값과 타입까지 똑같을 때 true가 된다  


//ternary operator: ?
// condition ? value : value2;
console.log(name === 'youngjin' ? 'yes' : 'no');//name이 youngjin이 트루면(?까지) yes를 실행하고 아니면 no를 실행

// loops
let i =3;
while(i > 0){
    console.log(`shile: ${i}`);
    i--;
}

// for loop
for(i=3; i> 0; i--){
    console.log(`for: ${i}`);
} 

