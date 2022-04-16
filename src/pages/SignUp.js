import React from "react";
import styled from "styled-components";
import Header from "../component/Header";


const SignUp = () => {
    return (
        <>
            <Header />
            <LoginBody>
                <LoginBox>
                    <div>로그인 또는 회원가입</div>
                    <div>에어비앤비에 오신 것을 환영합니다.</div>
                    <input label='이메일'></input>
                    <button>중복검사</button>
                    <input label='비밀번호'></input>
                    <button>중복검사</button>
                    <input label='닉네임'></input>
                    <button>중복검사</button>
                    <input label='프로필 이미지'></input>
                    <button>중복검사</button>
                    <button>계속</button>
                </LoginBox>
            </LoginBody>
        </>


    )
}
const LoginBody = styled.div`
justify-content:center;
display:flex;
padding-top:80px;
`

const LoginBox = styled.div`
height:700px;
width:100%;
max-width:568px;
border:1px solid #B0B0B0;
border-radius:12px;
position:relative;
margin-top:32px 0px;
overflow:visible;
box-sizing:border-box;
bottom:0px;
top:24px;
right:0px;
left:0px;
`

export default SignUp;