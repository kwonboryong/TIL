import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useEffect, useState, useRef } from 'react'
import Even from './components/Even'

function App() {
  const isMount = useRef(false); // 아직 mount 되지 않았기 때문에 false
  
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 1. 마운트
  useEffect(()=>{
    console.log("mount");
  }, []) 
  // deps[]의 값이 변경되어야 콜백 함수가 실행되기 때문에 컴퍼넌트가 처음 mount되었을 때(최초) 이후에는 다시는 실행되지 않는다.


  // 2. 업데이트
  useEffect(()=>{
    if(!isMount.current) { // mount가 실행되어 isMount가 true면
      isMount.current = true; // 현재 isMount값을 true로 변경하고
      return; // 강제 종료
    }
    console.log("update") // 컴포넌트가 리 렌더링 되어서 다시 호출될 때 실행됨(mount엔 실행 X)
  }) // mount 되었을 때 한 번 실행된 다음, 컴퍼넌트가 리 렌더링(업데이트) 될 때마다 실행된다.


  // 3. 언마운트





  const onClickBtn = (value) => {
    setCount(count + value);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value)
        }} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even/> : null}
      </section>
      <section>
        <Controller onClickBtn={onClickBtn}/>
      </section>
    </div>
  )
}

export default App
