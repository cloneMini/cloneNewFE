import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Header from "../component/Header";

import { actionCreators as userActions } from "../redux/modules/user";

const Login = () => {
  const dispatch = useDispatch();

  const login = () => {
    if (!(email && password)) return window.alert('로그인 실패');
    dispatch(userActions.loginAction(email, password));
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Header />

      <LoginBody>
        <LoginBox>
          <UpperDiv>
            <div>로그인</div>
          </UpperDiv>

          <DownDiv>
            <Welcome>에어비앤비에 오신 것을 환영합니다.</Welcome>
            <InputUpDiv>
              <Input
                placeholder="Email"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></Input>
            </InputUpDiv>
            <InputDownDiv>
              <Input
                placeholder="비밀번호"
                type="password"
                label="비밀번호 확인"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></Input>
            </InputDownDiv>
            <ContinueDiv>
              <Continue onClick={()=> {
                login()
              }}>로그인</Continue>
            </ContinueDiv>
          </DownDiv>
        </LoginBox>
      </LoginBody>
    </>
  );
};
const LoginBody = styled.div`
  justify-content: center;
  display: flex;
  padding-top: 80px;
`;

const LoginBox = styled.div`
  height: 450px;
  width: 100%;
  max-width: 568px;
  border: 1.5px solid rgb(235, 235, 235);
  border-radius: 12px;
  position: relative;
  margin-top: 32px 0px;
  overflow: visible;
  box-sizing: border-box;
  bottom: 0px;
  top: 24px;
  right: 0px;
  left: 0px;
`;

const UpperDiv = styled.div`
  height: 64px;
  display: grid;
  place-items: center;
  border-bottom: 1.5px solid rgb(235, 235, 235);
  font-weight: 800;
`;

const DownDiv = styled.div`
  padding: 24px;
  flex: 1 1 auto;
  overflow-y: auto;
`;

const Welcome = styled.h3`
  font-size: 22px;
  line-height: 26px;
  color: rgb(34, 34, 34);
  font-weight: 400px;
  margin-bottom: 8px;
  margin-left: 16px;
  text-align: left;
`;

const InputUpDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  border: 1.5px solid rgb(235, 235, 235);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: none;
`;

const InputDownDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  border: 1.5px solid rgb(235, 235, 235);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 0px;
  margin: 26px;
  min-height: 1px;
  background-color: transparent;
  text-align: start;
  display: inline-block;
`;

const ContinueDiv = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
`;

const Continue = styled.button`
  background-image: radial-gradient(
    circle at center center,
    rgb(255, 56, 92) 0%,
    rgb(230, 30, 77) 27.5%,
    rgb(227, 28, 95) 40%,
    rgb(215, 4, 102) 57.5%,
    rgb(189, 30, 89) 75%,
    rgb(189, 30, 89) 100%
  );
  cursor: pointer;
  display: inline-block;
  margin-top: 40px;
  text-align: center;
  font-size: 16px;
  width: 100%;
  color: #ffffff;
  border: none;
  outline: none;
  height: 50px;
  border-radius: 12px;
  font-weight: 700;
`;

export default Login;
