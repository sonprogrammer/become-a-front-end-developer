

//class 안에는 property인 속성(field)이 들어있고 행동(method)이 들어 있다

'use strict';

//class declarations
class Person{
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    speak(){
        console.log(`${this.name}: hello`);
    }
}

const youngjin = new Person('youngjin', 27);
console.log(youngjin.name);
console.log(youngjin.age);
youngjin.speak();


//Getter Setter
class user{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() { //가져온다 
        return this._age;
    }
    set age(value) { //set은 값을 설정한다
        this._age = value < 0 ? 0 : value;  //value가 마이너스이면(value < 0 ?) 0을 쓰고 아니면 0을 쓰겠다는 의미(value < 0 ? 0까지)
    }
}

const user1 = new user('steve', 'jobs', -1);
console.log(user1.age);



// 상속, 다형성
class shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw();   //super을 해주면 위에서 정의해줬던것도 같이 출력된다
        console.log('ㅁ'); //여기서도 재정의 됨
    }
    getArea(){      //다형성, overriding(우리가 필요한 함수만 재정의해서 쓰는 것)
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();

console.log(triangle.getArea());



//instanceOf

console.log(rectangle instanceof Rectangle); //true   //왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스의 인스턴스인지 아닌지를 확인하는 것 true랑 false를 리턴한다
console.log(triangle instanceof Rectangle); //false 
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true