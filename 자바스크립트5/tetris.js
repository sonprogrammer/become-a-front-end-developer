
//DOM
const playground = document.querySelector(".playground > ul")

//Setting
const GAME_ROWS = 20
const GAGE_COLS = 10


//variable
let score = 0
let durantion = 500 //duration 은 떨어지는 시간
let downInterval
let tempMovingItem

const BLOCKS ={
    tree: [
        [[2, 1], [0, 1], [1, 0],[1, 1]],    //tree가 방향을 바꿀때 4가지 니깐 왼쪽 아래 오른쪽 위
        [[1, 2], [0, 1], [1, 0],[1, 1]],
        [[1, 2], [0, 1], [2, 1],[1, 1]],
        [[2, 1], [1, 2], [1, 0],[1, 1]]
    ]
}

const movingItem ={
    type: "tree",
    direction: 0,
    top: 0,
    left: 3,

}


init()



//function
function init(){
    tempMovingItem =  movingItem


    for(let i = 0; i < GAME_ROWS; i++){
        prependNewLine()
    }
    renderBlocks()
}


function prependNewLine(){
    const li = document.createElement("li")
    const ul = document.createElement("ul")
    for(let j = 0; j < 10; j++){
        const matrix = document.createElement("li")
        ul.prepend(matrix)
    }
    li.prepend(ul)
    playground.prepend(li)
}

function renderBlocks(moveType = ""){
    const {type, direction, top, left} = tempMovingItem
    const movingBlocks = document.querySelectorAll(".moving")
    movingBlocks.forEach(moving =>{
        moving.classList.remove(type, "moving")
    })
    BLOCKS[type][direction].some(block => {
        const x = block[0] + left
        const y = block[1] + top
        const target = playground.childNodes[y] ? playground.childNodes[y].childNodes[0].childNodes[x] : null
        const isAvailable = checkEmpty(target)
        if(isAvailable){
        target.classList.add(type, "moving")   
    }else{
        tempMovingItem = {...movingItem}
        setTimeout(()=>{
            renderBlocks()
            if(moveType === "top"){
                seizeBlock()
            }
        }, 0)
    }
    })
    movingItem.left = left
    movingItem.top = top
    movingItem.direction = direction
}

function seizeBlock(){
    const movingBlocks = document.querySelectorAll(".moving")
    movingBlocks.forEach(moving => {
        moving.classList.remove("moving")
        moving.classList.add("seized")
    })
    genrateNewBlock()
}
function genrateNewBlock(){
    movingItem.top = 0
    movingItem.left = 3
    movingItem.direction = 0
    tempMovingItem = {...movingItem}
    renderBlocks()

}

function checkEmpty(target){
    if(!target || target.classList.contains("seized")){
        return false
    }
    return true
}

function moveBlock(moveType, amount){
    tempMovingItem[moveType] += amount
    renderBlocks(moveType)
}

function changeDirection(){

    const direction = tempMovingItem.direction
    direction === 3 ? tempMovingItem.direction = 0 : tempMovingItem.direction += 1
    renderBlocks()
}


//event handling
document.addEventListener("keydown", e=>{
    switch(e.keyCode){
        case 39:
            moveBlock("left", 1)
            break;
            case 37:
                moveBlock("left", -1)
                break
            case 40:
                moveBlock("top", 1)
                break
            case 38:
                changeDirection()
                break
            default:
                break;
    }
    console.log(e)
})