//join
{
const fruits = ['apple', 'orange', 'banana'];
// const result = fruits.join();   //join 괄호 안에 구분자를 넣어놓지 않으면 자동으로 콤마가 찍혀서 출력된다 
console.log(result); //==>  apple,orange,banana
const result = fruits.join('|'); // ==>출력 apple|orange|banana가 출력됨
}



//string을 배열로 만들기(split)
{
    const fruits = '🍊', '🍓','🍌','🍒';
    const result = fruits.split(','); //안에 전달받는 구분자와 리미트를 걸어줄수 있다, 여기서 리미트는 며개까지 출력되게 보여줄것인지
    console.log(result); // ==> 출력 ['🍊', '🍓','🍌','🍒']이 출력됨
    const result = fruits.split(',', 2); //==> 출력 ['🍊', '🍓']이 출력됨, 구분자랑 리미트를 적어주지않으면 그냥 나옴
}



//열을 거꾸로 출력하기(reverse)

{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);    //reverse는 배열 자체를 거꾸로만들어버림 한번이 아니라
    console.log(array);
}
//주어진 배열에서 앞에를 삭제하고 새로운 배열 생성(slice -> 선택한 숫자만 달라는것 , splice는 다름(선택한 숫자 빼고 달라는것) )
{
    //첫숫자는 그 인덱스 포함, 뒷숫자는 그 선택 숫자 인덱스 전 덱스까지 출력하겠다는 뜻
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(0, 2);  //인덱스 0부터 인덱스 2전까지 삭제하겠다는 뜻, ==> 즉, 다시 말해 첫숫자는 그 인덱스 포함, 뒷숫자는 그 숫자 인덱스 전 덱스까지 출력하겠다는 뜻
    console.log(result);    // [1,2]가 출력됨 1,2가 삭제된다는 뜻
    console.log(array);     //[3, 4, 5]가 출력됨
}
{
    //1, 5, 6만 출력 하기 = 인덱스 1부터 인덱스 3까지 삭제해주세요랑 같은 뜻
    const array = [1, 2, 3, 4, 5, 6];
    const result = array.slice(1,4); //왜 4냐면 4덱스전까지 적용되니깐
    console.log(result); //[2, 3, 4]
}
{
    //숫자가 하나만 있을 때
    const array = [1, 2, 3, 4, 5, 6];
    const result = array.slice(2); //인덱스2 배열에 있는 숫자 3부터 출력해서 뒤에 나머지 다 출력해줘
    console.log(result); //[3, 4, 5, 6]이 출력됨
}



//밑 배열에서 90점이상 학생 찾기(find api이용하기)
{
    const students = [
        new Student('A', 29, true, 45),
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90),
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88),
    ];

    const result = students.find(function(student){    //find api는 내가 콜백 함수를 만들어서 전달해야한다
        return student.score === 90;    
    });
    console.log(result);
}



//수업에 등록한 학생만(true가 등록한사람임) 배열로 만들기  -> 우리가 원하는 것만 뽑아 가져올 수 도있음(filter)
{
    const students = [
        new Student('A', 29, true, 45),
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90),
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88),
    ];

    const result = students.filter((student)=>student.enrolled);
    console.log(result);
}


//학생들의 점수만 쏙 빼서 배열 만들기 (map)
{
    const students = [
        new Student('A', 29, true, 45),
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90),
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88),
    ];

    const result = students.map((student) => student.score );
    console.log(result);
}




//학생들중에 50점 이하의 점수가 있는지 없는지 확인, 즉 배열안에점수가 50점보다 작은 학생이 있는지 없는지 확인(some)
{const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];
    const result = students.some((student) => student.score < 50);
    console.log(result);        //배열에 하나라도 만족하는 사람이 있다면 true가 출력된다. 


    const result2 = students.every((student) => student.score >= 50);
    console.log(result2);   // 배열중 모든 사람들이 50점이상되야 true가 출력됨 하나라도 아니면 false됨

}



//학생들의 평균점수를 구하기(reduce)
{
    const students = [
        new Student('A', 29, true, 45),
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90),
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88),
    ];

    const result = students.reduce((prev, curr) => {
        console.log('--------------');
        console.log(prev);
        console.log(curr);
        return curr;
    })
}



//학생들의 점수를 string으로 변환해서 만들어주기 종합적으로 풀어보기
{
    const students = [
        new Student('A', 29, true, 45),
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90),
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88),
    ];

    const result = students
        .map((student) => student.score)
        .fileter((score) => score >= 50)
        .join();
    console.log(result);
}



//학생들의 점수 정렬하고 string 으로 변환 
{
    const students = [
        new Student('A', 29, true, 45),
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90),
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88),
    ];

    const result = students.map(student => Student.score)
    .sort((a, b)=> a-b)
    .join();
    console.log(result);
}