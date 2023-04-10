//object를 json으로 변환하는 방법(stringify)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {    //rabbit이라는 오브젝트를 json으로 변환할 때는 함수가 포함되지 않는다 (오로지 데이터만),jump라는 메소드는 기능 없다
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },  
  };

  json = JSON.stringify(rabbit);
  console.log(json);


  json = JSON.stringify(rabbit, ['name', 'color', 'size']); //이런식으로 배열로 자기가 원하는 부분만 가져올수 있음
  console.log(json);

  json = JSON.stringify(rabbit, (key, value) => {   
      console.log(`key: ${key}, value: ${value}`);
    //   return value;     value를 리턴함
    return key === 'name' ? 'ellie' : value;    //만약 key가 name이라는 것이 들어오면 무조건 ellie라는 value로 설정하고 아니면 key가 name이 아니면 원래 value를 쓴는 것
  });
  console.log(json);




//json을 object로 변환하는 법(parse)

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key,value) =>{
    console.log(`key: ${key}, value: ${value}`);
    // return value;
    return key ==='birthDate' ? new Date(value) : value; //key가 만약 birthdate면 새로운 date오브젝트를 만들거고 key가 birthdate가 아니면 원래 있던 value그대로를 쓰자라는 뜻
});


console.log(obj);
raabit.jump();


console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());