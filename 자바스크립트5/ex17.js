// a부터 b까지 반복하기
// function solution(a, b) {
//     const max_width = 15;
  
//     if (b > max_width) {
//       b = max_width;
//     }
  
//     let pyramid = "";
//     for (let i = a; i <= b; i++) {
//       let row = "*".repeat(i);
//       pyramid += row
//       if(i !== b){
//       pyramid += "\n";
//       }
//     }
  
//     return pyramid;
//   }
  
// function solution(a, b) {
//     const max_width = 15;
  
//     if (b > a + max_width - 1) {
//       b = a + max_width - 1;
//     }
  
//     let pyramid = "";
//     for (let i = a; i <= b; i++) {
//       let row = "*".repeat(i);
//       pyramid += row;
//       if (i !== b) {
//         pyramid += "\n";
//       }
//     }
  
//     return pyramid;
//   }
//   console.log(solution(4, 8));
  

//8갯수 찾기
function sol(input){
    let count = 0;
    for(let i = 1; i <= input; i++){
        let strNumber = i.toString()
        count +=(strNumber.split('8').length - 1)
    }
    return count
}

console.log(sol(20))