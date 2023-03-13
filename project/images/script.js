//텍스트 작성과 삭제 즉시 실행함수

(function(){
const spanE1 = document.querySelector("main h2 span"); //main에 있는 h2의 span태그 선택
const txtArr = ['Web Publisher', 'Front-End Developer', 'Back-End Developer', 'Ios Developer'];
let index = 0;
let currentTxt = txtArr[index].split(""); //split("")이것은 음절대로 쪼개겠다는의미



function writeTxt(){
    spanE1.textContent += currentTxt.shift();
    if(currentTxt.length !== 0){ //currentTxt의 배열에 담겨있는 길이가 0이 아닐때만 밑에를 실행해라(한글자씩 꺼내라라는 뜻) 즉, currentTxt가 0이될 때까지 실해해라 라는 뜻
    setTimeout(writeTxt, Math.floor(Math.random() * 100))    //setTimeout()함수는 일정시간뒤에 특정함수를 한번실행시켜주는 메소드
}else{ // currentTxt의 길이가 0이되었을 때 밑에를 실행해라라는 뜻, 즉 글자가 다써졌을 때를 말함

    currentTxt = spanE1.textContent.split("");
    setTimeout(deleteTxt, 3000);
 }
}

function deleteTxt(){
    currentTxt.pop();
    spanE1.textContent = currentTxt.join("");
    if(currentTxt.length !== 0){ //currentTxt의 길이가 0이 될때 까지 실행해라라는 뜻 
        setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    }else{  //currentTxt가 0이되었을 때. 즉 글자가 다 지워졌을 때
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
    }
}

writeTxt();
})(); //(function()){}();는 즉시실행함수임