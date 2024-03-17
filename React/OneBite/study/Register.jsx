/* 회원가입 폼 만들기
수집할 정보
1. 이름
2. 생년월일
3. 국적
4. 자기소개 */

import { useState } from "react";

const Register = () => {

    // State 리팩토링
    // state의 초기값으로 객체 넣기
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });


    // Event Handler 리팩토링
    const onChange = (e) => {
        console.log(e.target.name, e.target.value)
        setInput({ 
            // 상태 변화 함수(setInput) 호출 -> 객체를 만들어서 전달
            ...input, // spread 연산자로 input state값을 나열
            [e.target.name]: e.target.value
            // 프로퍼티의 key를 onChange가 부착된 태그의 name 속성값으로 설정: 프로퍼티 value는 해당 입력값으로 할당  
        });
    };


    // 사용 중인 state명 변경하기 (value={input.name})
    // <input> 태그에 name 속성값 설정 (name="name")
    // 이벤트 핸들러 함수명 변경 (onChange={onChange})
    return (
    <div>
        <div>
            <input name="name" value={input.name} onChange={onChange} placeholder={"이름"} />
        </div>
        <div>
            <input name="birth" value={input.birth} onChange={onChange} type="date" />
        </div>
        <div>
            <select name="country" value={input.country} onChange={onChange}>
                <option value="kr">한국</option>
                <option>미국</option>
                <option>영국</option>
            </select>
            {input.country}
        </div>
        <div>
            <textarea name="bio" value={input.bio} onChange={onChange} cols="30" rows="10"></textarea>
        </div>
    </div>
    );
};

export default Register;