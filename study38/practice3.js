/* 처음 코드
const Peter = 26;
const Petersex = '남성';
let age = 0;
let sex = 0;


function whatshouldICallYou(age, sex){
    if(age = Peter){
        console.log('친구');
    } else if(age>Peter){
        if(sex = Petersex){
            console.log('형');
        } else if(sex =! Petersex){
            console.log('누나');
        }
    }else{
        if(age<Peter){
            if(sex = Petersex){
                console.log('남동생');
            } else if(sex =! Petersex){
                console.log('여동생');
            }
        }
    }
    

}
whatshouldICallYou(25, '여자');
whatshouldICallYou(20, '남자');
whatshouldICallYou(26, '여자');
whatshouldICallYou(30, '남자');
whatshouldICallYou(31, '여자');
*/

// 나의 나이와, 나의 성별을 저장하는 변수

let myAge = 26;
let myGender = 'male';


// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';


function whatShouldICallYou(yourAge, yourGender) {
    if(myAge === yourAge){
        return callFriend;
    } else if(myAge > yourAge){
        if(yourGender === 'male'){
            return callYoungerBrother;
        } else if(yourGender === 'female'){
            return callYoungerSister;
        }
    }else{
        if(yourGender ==='male'){
            return callOlderBrother;
            } else if(yourGender === 'female'){
                return callOlderSister;
            }
        }
    }

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

// 나의 나이와, 나의 성별을 저장하는 변수입니다.
/*
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수입니다.
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
function whatShouldICallYou(yourAge, yourGender) {
  // 여기에 코드를 작성해 주세요.
  if (myAge === yourAge) {
    return callFriend;
  } else if (myAge > yourAge) {
    if (yourGender === 'male') {
      return callYoungerBrother;
    } else if (yourGender === 'female') {
      return callYoungerSister;
    }
  } else {
    if (yourGender === 'male') {
      return callOlderBrother;
    } else if (yourGender === 'female'){
      return callOlderSister;
    }
  }
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
*/