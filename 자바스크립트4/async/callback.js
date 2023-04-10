'use strict';

//자바스크립트는 동기적이다
//위 말은 호이스팅이 된 이후부터 우리가 작성한 순서에 맞춰서 하나씩 동기적으로 실행된다는말
//호이스팅은 var, function 선언들이 자동적으로 제일 위로 올라가는 것이 호이스팅이다
//호이스팅이 된 이후 부터 코드가 나타나는 순서대로 자동적으로 실행이 된다는 말

console.log('1');
setTimeout(function() {     // (() => {console.log('2');},1000)=애로우 펑션
    console.log('2');
}, 1000)    //1000(1초)뒤에 콜백함수를 실행해달라는 것== 브라우저에 요청해놈 , 이것이 비동기적인 실행방법

console.log('3');

//동기적 콜백( 즉각적으로 동기적으로 실행함)
function printImmediately(print){
    print();
}
printImmediately(()=>console.log('hello')); //여기까지 최종적으로 1,2출력되고 Hello출력되고 그다음 1초뒤에 2가 출력된다


//비동기적 콜백(나중에 언제 실행될지 예측할 수 없는 비동기적 실행 )
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);



//콜백 지옥행~~~~~

class UserStorage{
    loginUser(id, password, onSuccess, onError){     //onSuccess는 로그인이 성공적으로 될때 onError는 로그인 실패할때 나오는 콜백함수이다  
        setTimeout(()=> {   //2초뒤에 이 코드 블럭이 실행된다 
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
            
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=> {
            if(user === 'ellie'){
                onSuccess({name: 'ellie', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);

    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password,
     user =>{
         userStorage.getRoles(user,
         userWithRole=>{
            alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
         },
         error => {console.log(error)}
         );
     }, 
     error => {console.log(error)} 
);