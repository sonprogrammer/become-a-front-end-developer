
//object = {key, value}; object는 key와 value의 집합체이다. -> 

const name = 'youngjin';
const age = 4;
print(name, age);

const obj1 ={};
const obj2 = new Object();
function print(person){
    console.log(person.name);
    console.log(person.age);
}
const youngjin = {name: 'youngjin', age: 4};
print(youngin);

youngjin.hasJob = true;
console.log(youngjin.hasJob);

delete youngjin.hasJob;
console.log(youngjin.hasJob);


//computed properties   프로퍼티는 string타입으로 지정해줘야된다
console.log(youngjin.name); //key에 해당하는 값을 받고 싶을 때 '.'을 쓴다
console.log(youngjin['name']);  //정확하게 어떤 Key가 필요한지 모를 때


//property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
//위는 너무 번거로워
//위의 문제인 버거로움을 해결하기 위해
//constuctor function
function Person(name, age){     //makePerson이라는 것은 약간 class 즉 템플릿같은 느낌이라 생각하면 쉽다. tip: 첫글자를 대문자로 함
    //this={};
    this.name = name;
    this.age = age;
    //return this;
}
const person4 = new Person('youngjin', 30);
console.log(person4);




//in operator
console.log('name' in youngjin);
console.log('age' in youngjin);
console.log('random' in youngjin);
console.log(youngjin.random);


//for..in , for..of

//for..in (key in obj)
console.clear();    //clear()을 이용하면 이전것들이 다 지워지다(chrome개발자 모드에서)
for(key in youngjin){
    console.log(key);   //youngjin안에 들어있는 모든 key들이 출력된다 
}

//for.. of
const array = [1, 2, 4, 5];
for(value of array){
    console.log(value);
}
//위와 같은 뜻
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }


//fun cloning
const user = {name: 'youngjin', age: '27'};
const user2 = user; //user2의 변수는 user에 들어있는 값이 user2에도 동일하게 할당된다는 말이다 그래서 user2에도 동일한 레퍼런스가 들어있다 
user2.name = 'coder';   //youngjin이 coder로 바뀜
console,log(user); //name: coder로 변경됨

//old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.log(user3);

//new way
const user4 = Object.assign({},user);
console.log(user4);

//another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); //fruit1이랑 fruit2가 섞임, 뒤에 나온값이 앞에 있는 값을 덮어 씌운다
console.log(mixed.color);
console.log(mixed.size);
//==> 출력 blue big why?뒤에 나온값이 앞에 있는 값을 덮어 씌운다