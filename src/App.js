import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post ='우동 맛집';
  let[글제목,b]=useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
  let[logo,setLogo]=useState('ReactBlog');
  let[number,setNumber]=useState(0);
  function 함수(){
    setNumber(number+1);
  }
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>{logo}</h4>
      </div>
      <button onClick={()=>{
      let copy = [...글제목];
      b(copy.sort());
      }}>글수정</button>
      <div className='list'>
        <h4>{글제목[0]}<span onClick={()=>{setNumber(number+1)}}>👍</span>{number}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{글제목[1]}<span onClick={함수}>👍</span>{number}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'> 
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
