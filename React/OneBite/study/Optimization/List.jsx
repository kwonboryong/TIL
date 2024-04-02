// 전체 Todo (TodoItem의 모음)
import "./List.css"
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List = () => {
    const todos = useContext(TodoStateContext);
    // TodoStateContext.Provider의 value props로 객체인 {todos}를 전달했기 때문에 변수로 받아야 함


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

    
    const {totalCount, doneCount, notDoneCount} = useMemo( ()=>{
        const totalCount = todos.length;
    
        const doneCount = todos.filter((todo) => todo.isDone).length;

        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    }, [todos])


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
                            />;
                })}
            </div>
        </div>
    )
};

export default List;