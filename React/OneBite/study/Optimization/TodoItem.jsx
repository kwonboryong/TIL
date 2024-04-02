// 개별 Todo (한 줄)
import { memo, useContext } from "react";
import "./TodoItem.css";
import { TodoDispatchContext } from "../App";

const TodoItem = ({id, isDone, content, date}) => {
    // context 
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);

    // 체크 박스 기능
    const onChangeCheckbox = () => {
        onUpdate(id);
        // onUpdate 함수의 인자로 id 전달
    };


    // 일정 삭제 기능
    const onClickDelete = () => {
        onDelete(id);
        // onDelete 함수의 인자로 id 전달
    }

    
    return (
        // props로 받아온 todo의 내용물 적용시키기
        <div className="TodoItem">
            <input 
                type="checkbox" 
                checked={isDone} 
                onChange={onChangeCheckbox}
            />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>

            <button onClick={onClickDelete}>삭제</button>
        </div>
    )
}

export default memo(TodoItem);