function interestCalculator(amount, term, rate){
    return amount*term*rate/100;
};

let mymoney = 365000;
let saveterm = 1;
let interestrate = 4;

let myinterest = interestCalculator(mymoney, saveterm, interestrate);
let totalmoney = mymoney + myinterest;

console.log('맡긴 금액은 ' + mymoney + '원 입니다.');
console.log('이자는 ' + myinterest + '원 입니다.');
console.log('최종 받을 금액은 ' + totalmoney + '원 입니다.');


