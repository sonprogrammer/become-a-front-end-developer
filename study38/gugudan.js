
/*//for문을 이용한 구구단
let i = 1;
let j = 1;

for (i = 1; i < 10; i++) {
    for (j = 1; j < 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }

}
*/
//while문을 이용한 구구단
let i = 1;
while(i <= 9){
    let j = 1;
    while(j <= 9){
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }
    i++;
}