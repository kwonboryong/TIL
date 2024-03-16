import "./Main.css";


const Main = () => {
    const user = {
        name: "이정환",
        isLogin: false,
    }

    if (user.isLogin) {
        return <div className="logOut">로그아웃</div>
    } else {
        return <div>로그인</div>
    }

    // 삼항 연산자
    // return (
    //     <>
    //     { user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    //     </>
    // );
};

export default Main;