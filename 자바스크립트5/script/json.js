const object={
    color: "red",
    mesage: "hello!"
}

const string = JSON.stringify(object) //JSON.stringfy(): 자바스크립트 객체 -> JSON 문자열

const other = JSON.parse(string) //JSON.parse(): JSON 문자열 -> 자바스크립트 객체

other.color
