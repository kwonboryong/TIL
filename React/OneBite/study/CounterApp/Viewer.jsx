// 현재 카운트

// App의 state인 count값 받아오기
const Viewer = ({count}) => { 
    return (
        <div>
            <div>현재 카운트: </div>
            <h1>{count}</h1>
        </div>
    )
}

export default Viewer;