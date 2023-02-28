/*
function checkheight(height){
    if (height>=140){
        console.log('탑승이 가능합니다.');
    } else{
        console.log('탑승이 불가능합니다.');
    }
    
}



checkheight(177);
checkheight(120);
checkheight(190);
*/

function checkheight(height){
    const LIMIT = 140;
    let passmessage = '탑승이 가능합니다.';
    let failmessage = '탑승이 불가능합니다.';

    if (height>= LIMIT){
        console.log(passmessage);
    }else{
        console.log(failmessage)
    }
}

checkheight(177);
checkheight(120);
checkheight(190);

