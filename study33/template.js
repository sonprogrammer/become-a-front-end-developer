/*
&& //and
|| //or
!//not


 and 는 둘다 참이어야 참 
   or 은 둘중에 하나만 참이여도 참
   not 은 true 를 false 로 false 를 true로
   여기서 !!는 반대의 반대로 원래 있던걸 출력함
*/

//typeof 연산자 --> typeof 쓰면 사용하는 값이 어떤 자료형인지 알수있다
/*
console.log(typeof 101);
console.log(typeof 1.1);
console.log(typeof '1');
console.log(typeof "1");
console.log(typeof '1');
*/

/*
let name = 'Codeit';
function sayHello(){
    console.log('Hello');
};

console.log(typeof name);
console.log(typeof sayHello);
*/

//문자-> 숫자
/*
let x = '문자';
console.log(Number(x));
console.log(typeof x);
console.log(typeof Number(x));

console.log('');

// 불린 -> 숫자
let y = true;
console.log(y);
console.log(Number(y));

*/
/*
let year = 1997;
let month = 01;
let day = 26;

console.log('생년월일은' + year + '년' + month + '월' + day + '일 입니다.');
console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);
*/

let myNumber = 19;

function getTwice(x){
    return x * 2;
};

console.log(`${myNumber}의 두배는 ${getTwice(myNumber)}입니다.`);