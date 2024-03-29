import { useReducer } from "react";

// 2. 실제 상태를 변환시키는 reducer 함수가 실행됨
function reducer(state, action) {
    // state = 0, action = "INCREASE", 1

    switch(action.type) {
        case "INCREASE": return state + action.data;
        case "DECREASE": return state - action.data;
        default: return state
        // 이외의 값은 그냥 state값 반환
    }

    // if (action.type === "INCREASE") {
    //     return state + action.data;
    //     /* action.type이 "INCREASE"라면 dispatch  함수가 실행됐다는 것 -> 버튼이 눌렸다는 것
    //     => 버튼이 눌렸으면 현재 state 값에 + 1(action.date)를 해줄 것 */
    // } else if (action.type === "DECREASE") { // - 버튼
    //     return state - action.data;
    // }
}


const Exam = () => {

    const [state, dispatch] = useReducer(reducer, 0); // state 초기값: 0

    // + 버튼
    const onClickPlus = () => {
        // 1. dispatch 함수가 호출됨
        dispatch ({
            type : "INCREASE",
            data : 1,
        })
        // 인수: 상태가 변하길 원하는 값
    }

    // - 버튼
    const onClickMinus = () => {
        dispatch({
            type: "DECREASE",
            data: 1,
        })
    }

    return ( 
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            {/* '+' 버튼 클릭 시 dispatch  함수를 호출(상태 변화를 요청)  */}
            <button onClick={onClickMinus}>-</button>
        </div>
    )
}

export default Exam;