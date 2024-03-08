let randomNum = 0;

function pickRandom(){
    randomNum = Math.floor(Math.random()* 100) + 1   //1~100 자연수 랜덤값 추출됨

}


let userInput = document.getElementById("user-input")

let playbutton = document.getElementById("play-button")
let resultArea = document.getElementById("result-area")

let chance = 5
let gameover = false
let chanceArea = document.getElementById("chance-area")
// chacne--;

let history = []

function play(){
    
    let userValue = userInput.value
    
    if(userValue < randomNum){
        resultArea.textContent = "up"
    }else if(userValue > randomNum){
        resultArea.textContent = "down"
    } else if(userValue == randomNum){
        resultArea.textContent = "congraturantion!!"
    }
    chance--;
    chanceArea.textContent = `남은 기회: ${chance}번`
    if(chance < 1){
        gameover = true
    }
    if(gameover === true){
        playbutton.disabled = true
    }
    if(userValue < 1 || userValue > 100){
        resultArea.textContent = "1~100사이 숫자를 입력하세요"
        
    }
    if(history.includes(userValue)){
        resultArea.textContent ="이미 입력한 값입니다"
    }
    history.push(userValue)
}

playbutton.addEventListener("click", function(){
    // pickRandom() 
    play()
})

// userInput.addEventListener("keyup", function(){
//     play()
// });

let resetButton = document.getElementById("reset-button")

resetButton.addEventListener("click", function reset(){
    userInput.value = ""    //리셋시 input 창이 깨끗학게 정리된다
    pickRandom();   //새로운 랜덤 번호가 생성된다   

    resultArea.textContent = "start game"

})

