'use strict';

//array
//declaration->배열 만드는 방법
const arr1 = new Array();
const arr2 = [1, 2];

//index position
const fruits = ['apple','bannana'];
console.log(fruits);
console.log(fruits.length); //2개
console.log(fruits[0]); //apple
console.log(fruits[1]); //bannana
console.log(fruits[3]);  //출력 undefined


//looping over an array
//1번째 방법
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
// 출력 apple bannana

//2번째 방법
for(let fruit of fruits){
    console.log(fruit);
}

//3번째 방법
fruits.forEach(function (fruit, index) {    //이름없는 함수는 narrow함수로 줄일수있음
    console.log(fruit, index);
})
// == 밑에처럼 줄일수잇음
fruits.forEach((fruit, index) => console.log(fruit));


//4번째 방법
//아이템 추가(push) - 맨뒤에 다가 넣음
fruits.push('strawberry', 'peach');
console.log(fruits);
//아이템 삭제(pop) - 맨뒤에 있는거 부터 삭제
fruits.pop();
console.log(fruits);

//아이템 추가(unshift) - 맨앞에다가 넣음 
fruits.unshift('strawberry', 'lemon');
console.log(fruits)
//아이템 삭제(shift) - 맨앞걸 뺌 
fruits.shift();
console.log(fruits);

//***여기서 shift와 unshift는 pop,push보다 훨씬 느리다***


//인덱스 위치로 아이템 삭제(splice)
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits);
fruits.splice(1); //원하는 인덱스부터 몇개를 지울껀지 적어주면 거기까지 지워줌, 몇개지울껀지 안쓰면 인덱스1부터 뒤에는 다지워짐
fruits.splice(1, 1);// 인덱스 1 하나만 지워짐
fruits.splice(1, 1, 'lime', 'watermelon');  // 인덱스1이 지워진 자리에 lime,watermelon이 들어감

//두가지 배열 결합하기
const fruit2 = ['lime', 'pineapple'];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);


//검색기능(검색 api)
console.log(fruits);
console.log(fruits.indexOf('apple')); //indexOf를 통해 사과의 인덱스 번호를 알수있다, 해당하는 값이 없으면 -1이 출력됨
console.log(fruits.includes('apple')); //includes를 통해 apple이 포함되어있는지 true,false값으로 알수 있다

//lastIndexOf
fruits.push('apple'); //apple추가
console.log(fruits);
console.log(fruits.indexOf('apple'));   //0이출력된다->왜냐면 처음부터 검색을 하다가 제일 처음 발견된 index번호를 알려줌
console.log(fruits.lastIndexOf('apple')); //마지막에 있는 apple의 인덱스 번호가 출력됨

