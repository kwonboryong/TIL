// 개별 Todo (한 줄)
import { memo } from "react";
import "./TodoItem.css";

// List.jsx에서 todo 객체 안의 내용들, onUpdate 함수(체크박스 기능), onDelete 함수(삭제 기능) 받아오기
const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

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
                onChange={onChangeCheckbox} // onChange 기능에 체크박스 기능 넣기 (<button>이 아니라 <input>이기 때문에 onChange 이용)
            />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>

            <button onClick={onClickDelete}>삭제</button>
            {/* 버튼의 이벤트 핸들링 설정 */}
        </div>
    )
}

// export default memo(TodoItem, (prevProps, nextProps)=>{
//     // 함수의 반환값에 따라 props가 바뀌었는지를 판단
//     // True -> props 바뀌지 않음 -> 리렌더링 X
//     // false -> props 바뀜 -> 리렌더링 O
//     if (prevProps.id !== nextProps.id) return false;
//     if (prevProps.isDone !== nextProps.isDone) return false;
//     if (prevProps.content !== nextProps.content) return false;
//     if (prevProps.date !== nextProps.date) return false;

//     return true; // 위에 걸리지 않으면 true
// });

export default memo(TodoItem);