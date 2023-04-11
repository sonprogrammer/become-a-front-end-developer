'use strict';

//promise는 자바스크립트안에 내장되어있는 오브젝트이다
//promise는 비동기적인 것을 수행할 때 콜백 함수 대신에 유용하게 쓸수 있는 오브젝트이다.


//Producer
// 새로운 promise가 만들어질 때는 전달한 executor가 자동적으로 실행된다 
const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(()=>{
        resolve('ellie');   //resolve는 콜백함수이다
    }, 2000);
});



//Consumers-> then, catch, finally등으로 값을 받아 올수있다 
promise.then((value)=>{ //value에는 ellie값이 들어온다,     값이 정상적으로 수행이 잘된다면(then) 값을 받아와 올것이다라는 뜻
    console.log(value);

});



//promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=>resolve(1), 1000);
});

fetchNumber //resolve의 1이 전달됨 ,then에서는 값을 바로 전달해도되고 또 다른 비동기인 프로미스를 전달해도 된다
.then(num => num * 2)   //1 * 2 = 2
.then(num => num * 3)   //2 * 3 = 6
.then(num => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(num - 1), 1000);    //6 - 1 = 5
    });
})
.then(num => console.log(num)); //5


//오류처리 (catch)
const getHen = () =>        //getHen은 암탉을 받아온다. 암탉을 받아오는 프로미스는 1초있다가 🐓을 리턴한다 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>       //getEgg는 치킨을 받고 치킨으로 부터 달걀을 리턴한다
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
    const cook = egg =>     //cook는 달걀을 받아와서 프라이드 에그를 리턴한다
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

// getHen()    //닭을 받아오고 나서
// .then(hen => getEgg(hen))       //닭이 받아와지면 전달받은 닭을 이용해서 getEgg라는 함수를 호출한다
// .then(egg => cook(egg))         //위가 정상적으로 수행이되면 받아온 egg를 가지고 cook을 할것이다 
// .then(meal => console.log(meal));       //cook이 되면 문자열을 출력할 것이다  초종 출력 : 🐓 => 🥚 => 🍳

// 위와 동일한 뜻이지만 좀 더간단하게 표기할수있다
getHen() 
.then(getEgg)
.catch(error => {   //계란을 받아올 때 문제가 생긴다면 다른것(밑에 빵)을 전달한다, 여기서 오류 처리를 해주지않으면 계란을 받아오는것에서 오류가 났기 때문에 음식이 완성되지 않고 에러가 뜬다
    return '🍞';
})
.then(cook)
.then(console.log)
.catch(console.log);



//