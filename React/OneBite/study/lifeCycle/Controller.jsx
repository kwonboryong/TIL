// count 버튼 기능

// App 컴포넌트에서 count 버튼 기능 함수를 props로 가져오기
const Controller = ({onClickBtn})=> {
    return (
        <div>
            <button 
                onClick={()=>{ // 버튼 클릭 시 count 버튼 기능 함수 실행
                    onClickBtn(-1); // -1을 onClickBtn의 인수 value값으로 전달
                }}
                >-1
            </button>
            <button 
                onClick={()=>{
                    onClickBtn(-10);
                }}>
                -10
            </button>
            <button 
                onClick={()=>{
                    onClickBtn(-100);
                }}>
                -100
            </button>
            <button 
                onClick={()=>{
                    onClickBtn(+100);
                }}>
                +100
            </button>
            <button 
                onClick={()=>{
                    onClickBtn(+10);
                }}>
                +10
            </button>
            <button 
                onClick={()=>{
                    onClickBtn(+1);
                }}>
                +1
            </button>
        </div>
    )
}

export default Controller;