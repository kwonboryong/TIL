// Todo 추가하는 부분
import "./Editor.css"
import { useState, useRef, useContext } from "react"
import { TodoDispatchContext } from "../App";

// context로 데이터 꺼내기
const Editor = () => {
    const {onCreate} = useContext(TodoDispatchContext);
    // 구조분해할당

    const [content, setContent] = useState(""); 

    const onChangeContent = (e) => {
        setContent(e.target.value)
    }


    const contentRef = useRef();

    const onKeyDown = (e) => {
        if(e.keyCode === 13) {
            onSubmit();
        }
    }

    const onSubmit = () => {

        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
         
        setContent("");
    }


    return (
        <div className="Editor">
            <input 
                type="text" 
                placeholder="새로운 Todo..." 
                value={content}
                ref={contentRef}
                onKeyDown={onKeyDown}
                onChange={onChangeContent} 
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    )
}

export default Editor;