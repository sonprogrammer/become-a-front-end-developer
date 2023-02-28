// constant
const pi = 3.14;
let radius = 0;

//원의 넓이를 계산하는 함수
function calculateArea(){
    return pi * radius * radius;  
};

function printArea(){
    return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}이다.`;
};

radius = 4;
console.log(printArea());

radius = 7;
console.log(printArea()); 

radius = 8;
console.log(printArea());