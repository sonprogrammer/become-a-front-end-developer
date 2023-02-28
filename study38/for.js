/*
for (let i = 1; i <= 15; i++) {
    console.log(`${i} 손영진 최고!`);
}

// practice 1 
let i = 1;

for(; i <= 50; i++){
    console.log(i*2);
}
*/

function printtriangle(height) {
    let message = ' ';
    for (let i = 0; i < height; i++) {
        message += '*';
        console.log(message);
    }
}

console.log('높이 : 1');
printtriangle(1);

console.log('높이 : 3');
printtriangle(3);

console.log('높이 : 5');
printtriangle(5);