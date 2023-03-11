
// 변수선언
num = 3;    //변수이름 은 num(값은 변할수 있다) 값은 3, 변수(데이터 저장공간)를 선언하다, 데이터를 할당하다 --> 암시적 선언이라함(var, let, const키워드를 사용하지 않고 변수를 선언하는 것)
console.log(num);

num = 10;
console.log(num);




// ********변수의 중복선언이 불가 + 변수의 할당된 데이터가 변경이 불가하다********
const constant = 110;   
console.log(constant);
// constant = 120;
// console.log(constant)

// ********변수의 중복선언 가능******** 
var num1 = 3;
console.log(num1);

var num1 = 10;
console.log(num1);


// ********중복선언이 불가 but 변수의 할당된 데이터변경 가능********
let str = "a";
console.log(str);
str = "b";
console.log(str);
// let str = "b";
// console.log(str);
