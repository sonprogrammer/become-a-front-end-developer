

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  let [글제목, 글변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']); 

  let [따봉, 따봉변경] = useState(0);



  let posts = '강남 고기 맛집';

  // function 제목변경(){
  //   let newArray = [...글제목];
  //   newArray[2] = '여자 추천';
  //   글변경(newArray);
    // 글변경(['여자 코트 추천', '강남 우동맛집', '파이썬독학']);
  // }

  function 제목변경(){
    var newArray = [...글제목];
    if(newArray[0] == '남자 코트 추천'){
      newArray[0] = '여자  추천';
    }else{
      newArray[0] = '남자 코트 추천';
    }
    글변경(newArray);

  }

  function 글제목정렬(){
    var newArray = [...글제목];
    newArray.sort();
    글변경(newArray);
  }

  return (

    <div className="App">
      <div className="black-nav">
          <div>개발 Blog</div>
      </div>
      <button onClick = {글제목정렬}>버튼</button>
      <div className="list">
        <h3> {글제목 [0]}<span onClick = {() =>{따봉변경(따봉 - 3)}}> 👍🏿 </span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목 [1]}</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목 [2]}</h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
