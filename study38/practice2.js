

function printGrade(midtermscore, finalscore){
    let total = midtermscore + finalscore;

    if(total>=90){
        console.log('A');
    } else if(total>=80){
        console.log('B');
    }else if(total>=70){
        console.log('C');
    }else if(total>=60){
        console.log('D');
    } else{
        console.log('F');
    }
    
}
printGrade(40, 20);
printGrade(50, 50);
printGrade(10, 10);
printGrade(40, 35);