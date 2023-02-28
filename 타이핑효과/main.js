let target = document.querySelector("#dynamic"); //let은 변수임, dynamic이라는 id속성값을 가지고 있는문서 객체를 선택해라라는 뜻
let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javasript"];
//let selectString = stringArr[0];    //stringArr에 있는 첫번째 배열이 출력됨(Learn to HTML)
//let selectString = stringArr[Math.random() * 3] //3미만의 랜덤 숫자가 만들어지게 된다
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];  //stringArr의 크기미만 만큼 만들어진다
//selectString는 위에 "Learn to HTML", "Learn to CSS", "Learn to Javasript"중 하나가 선택해 들어가진다  

let selectStringArr = selectString.split(""); //selectString의 해당 문자열을 ("")을 기준으로 이용해 배열로 분리 시켜라라는 의미
//계속해서 설명하면 split("")을 하면 알파벳하나하나로 배열이 만들어짐 예를들어 ["L","e","a",등등등] 이런식으로만들어짐

function randomString(){
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javasript"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");
    return selectStringArr;
}

//타이핑 리세
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

//한글자 씩 텍스트 출력 함수
function dynamic(randomArr){

    console.log(randomArr);
    if(randomArr.length > 0){   //randomArr의 배열길이가 0보다 크면 계속 출력
        target.textContent += randomArr.shift(); //shift는 배열 앞에 있는것부터 빼내서 출력해라라는 것
        setTimeout(function(){
            dynamic(randomArr);
        }, 80); //80은 0.08초임
    }else{  //randomArr의 배열 글이 다 출력되면 

        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

console.log(selectString);
console.log(selectStringArr);

//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500); //setInterval은 반복함수이다, blink라는 함수를 0.5(=500)초마다 실행해라라는 뜻