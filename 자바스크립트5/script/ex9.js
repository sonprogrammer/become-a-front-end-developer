let addButton = document.getElementById("addButton")
let tdContainer = document.getElementById("tdContainer")
let textInput = document.getElementById("textInput")


addButton.addEventListener('click', function(){
    // p태그 생성
    let paragraph = document.createElement('p')
    paragraph.innerText = textInput.value   //value는 현재 input요소의 현재 입력된값
    paragraph.classList.add('paragraph-style')

    // child에 p태그 추가
    tdContainer.appendChild(paragraph)

    //다시 empty text로 변경
    textInput.focus()

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through"
        paragraph.style.color = "gray"

    })
    paragraph.addEventListener('dblclick', function(){  //dblclick은 더블클릭
        tdContainer.removeChild(paragraph)
    })
})
textInput.addEventListener("keyup", function(e){
    if(e.keyCode == 13){    //enter의 keycoderk 13이다, 즉 enter를 누르면
        e.preventDefault()  //preventDefault()메서드를 호출하여 기본적 동작 취소, 엔터는 기본적으로 줄바꿈인데 이를 e.preventDefault()로 그런 동작을 막는다
        document.getElementById('addButton').click() //엔터가 눌리면 addButton이라는 id를 가진 요소를 찾아 강제로 클릭이벤트를 발생시킴, 이로써 엔터를 누르면 addButton요소를 클릭하는 동일한 효과를 얻음
    }
}) 