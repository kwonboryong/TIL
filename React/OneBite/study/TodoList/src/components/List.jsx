// 전체 Todo (TodoItem의 모음)
import "./List.css"
import TodoItem from "./TodoItem";
import { useState } from "react";

// App.jsx에서 todos state, onUpdate(체크박스 기능), onDelete(삭제 기능) 받아오기(구조분해할당)
const List = ({todos, onUpdate, onDelete}) => {

    // 검색 기능
    // 검색어를 저장할 state 선언
    const [search, setSearch] = useState("");

    // 검색어 입력 시 입력된 검색어로 state값을 변경하는 변경 함수 실행
    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    };

    // todos state 배열에서 현재 검색 결과의 값들만 필터링하기
    const getFilteredData = () => {
        if (search === "") { // 공백이면 전체 리스트 반환
            return todos;
        } 

        // 공백이 아니면
        // todo를 매개변수로 받아서(todo를 모두 순회) todo 내용에 검색어(search)가 포함되어있는 일정만 필터링해서 반환
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
            // 대소문자 구분 X: 검색어를 소문자로 변환해서 검색
      );
    };

    // 리렌더링 될때마다 검색 필터링 함수 호출
    const filteredTodos = getFilteredData();


    return (
        <div className="List">
            <h1>Todo List 🌱</h1>
            <input 
                placeholder="검색어를 입력하세요"
                value={search} 
                onChange={onChangeSearch}
            />
            <div className="Todos_wrapper">
                {filteredTodos.map((todo) => { // map() 메서드를 통해 todos state 배열에 담긴 데이터를 리스트로 렌더링
                    // 매개변수 todo엔 하나의 TodoItem 객체가 들어있음
                    return <TodoItem 
                                key={todo.id} 
                                {...todo} 
                                onUpdate={onUpdate} 
                                onDelete={onDelete} 
                            />;
                    // {...todo}: 매개변수 todo의 모든 데이터가 props로 TodoItem.jsx에 전달됨
                    // key={todo.id}: 컴포넌트 렌더링 시 모든 item 컴포넌트에 반드시 key props를 고유한 값으로 전달해줘야 한다.
                    // onUpdate: TodoItem.jsx에 props로 onUpdate 함수 전달하기
                    // onDelete: TodoItem.jsx에 onDelete 함수 전달하기
                })}
            </div>
        </div>
    )
};

export default List;