// 전체
import './App.css'
import { useState, useRef, useReducer, useCallback, createContext, useMemo} from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

// 임시 데이터 (기본 데이터)
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


// useReducer
// - action 객체의 값에 따라 변화된 state를 반환
function reducer(state, action) {

  switch (action.type) {
    case 'CREATE': 
      return [action.data, ...state]

    case 'UPDATE': 
      return state.map((item) => 
        item.id === action.targetId 
          ? {...item, isDone: !item.isDone} 
          : item
      )

    case 'DELETE':
      return state.filter((item) => 
        item.id !== action.targetId)

    default:
      return state;
  }
}

// context
// 변화할 값
export const TodoStateContext = createContext();
// 변화하지 않는 값
export const TodoDispatchContext = createContext();


function App() {

  // useReducer
  const [todos, dispatch] = useReducer(reducer, mockDate);
  
  // Todo의 index 역할
  const idRef = useRef(3); 


  // CREATE (일정 추가 기능)
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    })
  }, [])

  // UPDATE (체크박스 기능) (+ 최적화)
  const onUpdate = useCallback((targetId) => { // 
    dispatch({
      type: "UPDATE",
      targetId: targetId
    })
  }, [])

  // 일정 삭제 기능 (+ 최적화)
  const onDelete = useCallback((targetId) => { 
    dispatch({
      type: "DELETE",
      targetId: targetId
    })
  }, []) // deps를 빈 배열로 놔둠 => Mount 될 때에만 함수 생성, 그 뒤로는 생성 X


  // TodoDispatchContext로 전달하는 데이터들은 변하지 않기 때문에 리렌더링이 불필요하다 => useMemo 사용
  const memoizedDispatch = useMemo(()=> {
    return {onCreate, onUpdate, onDelete};
  }, []); // deps를 빈 배열로 뒀기 때문에 Mount 이후엔 재생성되지 않음!


  return (
    <div className='App'>       
      <Header/>

      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
        <Editor/> 
        <List/>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>

    </div>
  )
}
 
export default App