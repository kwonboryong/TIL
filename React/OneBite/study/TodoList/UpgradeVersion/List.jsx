// 전체 Todo (TodoItem의 모음)
import "./List.css"
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ({todos, onUpdate, onDelete}) => {

    // 검색 기능
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    };

    const getFilteredData = () => {
        if (search === "") { 
            return todos;
        } 

        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
      );
    };

    const filteredTodos = getFilteredData();

    
    // 현재의 Todo들의 상태를 분석해서 수치로 제공하는 함수
    // 구조 분해 할당으로 각 변수에 할당
    const {totalCount, doneCount, notDoneCount} = useMemo( ()=>{
        // 전체 Todo 개수
        const totalCount = todos.length;
    
        // 완료 Todo 개수
        // - filter 메서드는 배열 내 전체 요소를 다 순회하기 때문에 데이터가 많을수록 시간이 오래 걸린다. => useMemo 사용 - 특정 조건이 만족했을 때에만 결과 값을 다시 계산하도록 설정
        const doneCount = todos.filter((todo) => todo.isDone).length;

        // 미완료 Todo 개수
        const notDoneCount = totalCount - doneCount;

        // 위의 3개 객체로 반환
        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    }, [todos])
    // 1번 인자 function: useMemo 콜백 함수의 반환값(totalCount, doneCount, notDoneCount)이 const {totalCount, doneCount, notDoneCount}로 들어감 
    // 2번 인자 deps: 앞의 콜백 함수 반환값을 deps를 기준으로 메모이제이션 함, todos의 값이 변경되면 콜백 함수 실행


    return (
        <div className="List">
            <h1>Todo List 🌱</h1>

            {/* Todo 수치 렌더링 */}
            <div>total : {totalCount}</div>
            <div>done : {doneCount}</div>
            <div>notDone : {notDoneCount}</div>

            <input 
                placeholder="검색어를 입력하세요"
                value={search} 
                onChange={onChangeSearch}
            />
            <div className="Todos_wrapper">
                {filteredTodos.map((todo) => { 
                    return <TodoItem 
                                key={todo.id} 
                                {...todo} 
                                onUpdate={onUpdate} 
                                onDelete={onDelete} 
                            />;
                })}
            </div>
        </div>
    )
};

export default List;