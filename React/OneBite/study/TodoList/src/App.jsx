// 전체
import './App.css'
import { useState, useRef} from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

// 임시 데이터 (기본 데이터)
// - 계속 렌더링할 필요 없으니 state 밖에 선언
const mockDate = [
  {
    id: 0, // index
    isDone: false, // 체크박스
    content: "React 공부하기", // 글 내용
    date: new Date().getTime() // 글 발행 시간
  },
  {
    id: 1, 
    isDone: false, 
    content: "자기소개서 작성하기",
    date: new Date().getTime() 
  },
  {
    id: 2, 
    isDone: false,
    content: "포르폴리오 수정하기", 
    date: new Date().getTime() 
  },
];


function App() {

  // 추가 기능
  // TodoItem을 저장할 state 
  // 추가: 내용을 입력하고 추가 버튼을 누르면 todos state값을 변경해줘야 한다.
  const [todos, setTodos] = useState(mockDate); 
  // 임시 데이터를 초기값으로 설정

  // Todo의 index 역할 => 중복 글을 구분하기 위해
  const idRef = useRef(3); // 임시 데이터 id와 겹치지 않도록 3으로 설정


  // Editor.jsx에서 Todo 입력값(=content)을 가져와서 기존의 데이터 객체로 만드는 함수
  const onCreate = (content) => {
    const newTodo = { // 이 데이터 객체를 todos state 배열에 추가해줘야 함
      id: idRef.current++, // 새로 부여한 index를 증가시켜서 id에 부여
      isDone: false,
      content: content, // props로 받은 Todo 입력값을 content에 부여
      date: new Date().getTime()
    }
    
    // state값 업데이트 하기
    // spread 연산자(...)로 기존의 todos state 배열의 값들을 풀어헤치고 -> 추가할 newTodo 데이터를 넣는다.
    setTodos([newTodo, ...todos])
  }


  // 체크박스 기능
  // todos state 배열에서 targetId와 id가 일치하는 todo의 isDone을 바꾼 배열을 생성하는 함수
  const onUpdate = (targetId) => { // 체크박스가 클릭된 요소의 아이디(targetId)를 인수로 받아옴

    // state를 isDone을 바꾼 todo로 변경하기 위한 변경 함수 사용
    setTodos(todos.map((todo)=> {
      
      // 일치하면 todo를 spread 연산자(...)로 풀어헤쳐서 isDone의 상태를 현재의 반대값으로 만든다.
      if (todo.id === targetId) {
        return {
          ...todo,
          isDone: !todo.isDone
        }
      }

      // 일치하지 않으면 원래 todo 반환
      return todo 
    }))
  }

  
  // 일정 삭제 기능
  // todos state 배열에서 targetId와 id가 일치하는 요소를 삭제한 배열을 생성하는 함수
  const onDelete = (targetId) => { // 삭제할 todo의 id를 가져옴(targetId)
    setTodos(todos.filter((todo) => todo.id !== targetId))
    // todos 배열에서 모든 todo를 순회하여 todo의 id와 targetId가 일치하지 않은 것들만 필터링 => 삭제 대상이 아닌 것들만 필터링
  }


  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/> 
      {/* Editor.jsx에 props로 onCreate함수 전달 */}
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/> 
      {/* List.jsx에 props로 todos state, onUpdate(체크박스 기능), onDelete(삭제 기능) 전달 */}
    </div>
  )
}
 
export default App