import React from "react";
import styled from "styled-components";
import Header from "../component/Header";

const Login = () => {
    return (
        <div>
            <Header/>
            <div>로그인 또는 회원가입</div>
            <div>에어비앤비에 오신 것을 환영합니다.</div>
            <input label='이메일'></input>
            <button>중복검사</button>
            <input label='비밀번호'></input>
            <button>중복검사</button>
            <button>계속</button>
        </div>
    )
}

export default Login;