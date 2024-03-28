import "./Header.css";

const Header = () => {
    return (
    <div className="Header">
        <h2>오늘은 📆</h2>
        <h1>{new Date().toDateString()}</h1>
        {/* // Date 객체 생성 후 String으로 변환 */}
    </div>
    )
}

export default Header;