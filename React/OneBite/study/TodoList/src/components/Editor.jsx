// Todo 추가하는 부분
import "./Editor.css"
import { useState, useRef } from "react"

// App.jsx에서 onCreat 함수 받아오기(구조분해할당)
// - 아래의 onSubmit 함수에서 실행됨
const Editor = ({onCreate}) => {

    // <input> 입력값을 저장할 state 선언
    const [content, setContent] = useState(""); 
    
    // <input> 입력값을 content state에 저장하기 위한 변경 함수
    const onChangeContent = (e) => {
        setContent(e.target.value)
    }


    // 입력칸이 공백일 때 추가 시 입력칸에 포커싱을 주기 위한 ref 선언
    const contentRef = useRef();

    // Enter를 치면 Todo 등록하는 함수
    const onKeyDown = (e) => {
        if(e.keyCode === 13) {
            onSubmit();
        }
    }

    // Enter를 치면 실행되는 함수
    const onSubmit = () => {
        
        // 입력칸이 공백인데 '추가' 버튼을 누르면 입력칸 포커싱 & 추가 막기
        if (content === "") {
            contentRef.current.focus();
            return;
        }

        // App.jsx의 onCreate() 함수에 인자값으로 content 전달하여 실행
        // 위에서 props로 onCreate 함수를 받아왔기 때문에 가능
        onCreate(content);

        // Todo 추가 후 content state 초기화 (안하면 입력칸에 문자 남아있음) 
        setContent("");
    }


    return (
        <div className="Editor">
            <input 
                type="text" 
                placeholder="새로운 Todo..." 
                value={content} // <input> 입력값의 초기값을 content("")로 설정해둠
                ref={contentRef} // 입력칸 포커싱을 위한 ref 연결
                onKeyDown={onKeyDown} // 사용자가 키를 눌렀을 때 동작
                onChange={onChangeContent} 
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    )
}

export default Editor;