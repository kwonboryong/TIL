/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers';

function App() {
  let [제목, 제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  
  // 글마다 like 따로 표시하기
  let [like, setLike] = useState(['0', '0', '0']);

  let [modal, setModal] = useState(false); // false: 닫힘, true: 열림 

  let [title, setTitle] = useState(0); // 0 = 글1, 1 = 글2, 2 = 글3

  let [value, setValue] = useState('');


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'white', fontSize : '19px'} }>React Blog</h4>
      </div>
        <button onClick={()=> {
          let copy = [...제목];
          copy.sort();
          제목변경(copy)
        }}>가나다순 정렬</button>

      {/* <div className='list'>
        <h4>{제목[0]} <span onClick={ ()=>{setLike(like+1)} }>👍</span> {like} </h4>
        <button onClick={ ()=> {
          let copy = [...제목]; // 원본 데이터 복사
          copy[0] = '여자 코트 추천'; // 데이터 수정
          제목변경(copy); // state 변경
        } }>글 수정</button>
        <p>2월 17일 발생</p>
      </div>
      <div className='list'>
        <h4>{제목[1]}</h4>
        <p>2월 17일 발생</p>
      </div>
      <div className='list'>
        <h4 onClick={()=> { setModal(!modal) }}>{제목[2]}</h4>
        <p>2월 17일 발생</p>
      </div> */}
        {
          제목.map(function(a, i){
            return ( 
              <div className='list' key={i}>
                <h4 onClick={()=> { setModal(!modal); setTitle(i) }}> {a} 
                  <span 
                    onClick={(e)=> { 
                      e.stopPropagation(); // 이벤트 버블링 막기
                      let likeCopy = [...like]; // 원본 복사
                      likeCopy[i]++; // index에 해당하는 글의 좋아요 증가++
                      setLike(likeCopy); // 증가된 값으로 state 변경
                    }}>
                    👍
                  </span>{like[i]}
                  {/* 증가된 값으로 좋아요 숫자 변경 */}
                </h4>
                {/* = 제목[i] */}
                <p>2월 17일 발생</p>
                <button onClick={()=> {
                  let copy = [...제목];
                  copy.splice(i, 1); 
                  // .splice: copy에서 원하는 자료 삭제
                  제목변경(copy);
                }}>삭제</button>
              </div>
            )
          })
        }
        
        <input type="text" onChange={(e)=> { setValue(e.target.value)}}/> 
        {/* 입력값을 setValue(e.target.value)}로 value에 저장 */}

        <button onClick={() => {
          let copy = [...제목];
          copy.unshift(value); 
          // .unshift: copy 맨 처음에 유저가 입력한 값 추가
          // 위에서 입력값을 setValue(e.target.value)}로 value에 저장했음
          제목변경(copy)
        }}>발행</button>


        {
          /* 3. state에 따라 UI가 어떻게 보이게 할지 작성 */
          // {중괄호} 내에서는 if문, for문 사용 X -> 대신 삼항 연산자 사용
          modal == true ? <Modal title={title} 제목변경={제목변경} 제목={제목}/> : null
        }
    </div>
  );
}

// 1. html/css로 디자인 완성
function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글 수정</button>
    </div>
  )
}

export default App;