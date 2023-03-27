function Hello(){
    console.log('hello');
}
Hello();

function log(message){
    console.log(message);
}
log('hello@@@');

// parameter
function changeName(obj){
    obj.name = 'coder';
}
const youngjin = {name: 'youngjin'};
changeName(youngjin);
console.log(youngjin)
//==> 출력은 coder가 된다

function showMessage(message, from ='unknown'){ //parameter옆에 원하는 디폴트 값을 넣어주면 값을 넣어주지 않아도 null이 되는게 아니라
    //unknown으로 표시 된다  

    console.log(`${message} by ${from}`);
}
showMessage('hi');


// Rest parameter
function printAll(...args){     // ...을 쓰면 배열 형태로 전달되게 된다 
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'youngjin');


//local scope   --> 박에서는 안이 보이지않고 안에서만 밖이 보인다 
let globalMessage = 'global';   //global variable
function printMessage(){
    let message = 'hello';  //message는 지역변수(local variable)이다 
    console.log(message);
    console.lg(globalMessage);
    function printAnother(){
        console.log(message);   //자식은 부모에서 정의된 변수를 확인할 수 있다 But 자식의 변수를 부모함수에서 볼 수 없다.
        let childMessage = 'hello';
    }
    console.log(childMessage);  //오류 발생!!!!
}
printMessage();
console.log(message); //오류 발생why? 밖에서는 안을 볼수 없기때문(대괄호안에 있으니깐)


//return 
function sum(a, b){
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);


const print = function () {      //함수를 선언함과 동시에 print라는 변수에 할당한다 , 이름이 없는 함수를 annonymous function이라함 
    console.log('pring');
};
print();



//callback function 
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
const printYes = function(){
    console.log('yse');
};
const printNo = function(){
    console.log('no');
};
randomQuiz('wrong', printYes, printNo); //no출력
randomQuiz('love you', printYes, printNo);  //yes출력


// Arrow function
const simplePrint = function(){
    console.log('simplePrint');
}
const simplePrint = () => console.log('simplrPrint');
const add = (a, b) => a + b;    //(a, b)에서 a와 b를 받아서 a+b합한값을 리턴해준다 
const add = function(a,b){      //위와 같은 뜻
    return a + b;
};



//IIFE 
(function hello(){
    console.lg('IIFE');
})();   //-->함수 선언동시에 실행됨