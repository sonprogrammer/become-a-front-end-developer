//async & await은 깔끔하게 프로미스를 사용할수 있는 방법이다, 


//async사용법
async function fetchUser(){
    return new Promise((resolve, reject) => {
        return 'ellie';
    });

}

const user = fetchUser();
user.then(console.log);
console.log(user);


//await 사용 -> async가 붙은 함수 안에서만 사용 가능 하다
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));     //ms는 밀리세컨드 즉 시간이다
}

async function getApple(){
    await delay(2000);      
    // throw 'error';
    return '🍎';
}

async function getBanana(){
    await delay(1000);
    return '🍌';
}

// function pickFruits(){   이거또한 콜백 지옥ㅠㅠ 이것을 좀 간단하게 쓰는건 밑에서 확인하기
//     return getApple()
//     .then(apple =>{
//         return getBanana()
//         .then(banana => `${apple} + ${banana}`);
//     });
// }

//위를 밑에 처럼 작성할 수 있음
async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);


//유용한 promise API
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])   //all이라는 API는 프로미스라는 배열을 전달하게 되면 모든 프로미스들이 병렬적으로 받을 때까지 모아주는 api
    .then(fruits => fruits.join(' + '));    //join은 배열을 string으로 묶을 수있는거임

}

pickAllFruits().then(console.log);


function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()])     //race api는 배열에 전달된 프로미스 중에서 가장 먼저 값을 리턴하는 아이만 전달되어진다 
}

pickOnlyOne().then(console.log);