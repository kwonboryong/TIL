// 개별 Todo (한 줄)
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

export default TodoItem;