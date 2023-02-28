/* 스위치 기본구성
switch (비교할_값) {
    case 조건값_1;
    동작부분;
    break;
    case 조건값_2;
    동작부분;
    break;
    default;
    동작부분;
}
*/
/*
let myChoice = 2;

switch(myChoice){
    case 1;
    console.log('토끼를 선택한 당신, ...');
    break;
    case 2;
    console.log('고양이를 선택한 당신,...');
    break;
    case 3;
    console.log('코알라를 선택한 당신, ...');
    break;
    case 4;
    console.log('강아지를 선택한 당신, ...');
    default;
    console.log('1에서 4사이의 숫자를 선택해 주세요.');
}
*/
let VIPprice = 15;
let Rprice = 13;
let Sprice = 10;
let Aprice = 8;

function checkprice(grade) {

    switch (grade) {
        case 'VIP':
        console.log(`${grade}석은 ${VIPprice}만원 입니다.`);
        break;
        case 'R':
        console.log(`${grade}석은 ${Rprice}만원 입니다.`);
        break;
        case 'S':
        console.log(`${grade}석은 ${Sprice}만원 입니다.`);
        break;
        case 'A':
        console.log(`${grade}석은 ${Aprice}만원 입니다.`);
        default:
        console.log('VIP, R, S, A 중에서 하나를 선택해 주세요.');
    }
}

checkprice('R');
checkprice('VIP');
checkprice('S');
checkprice('A');
checkprice('B');