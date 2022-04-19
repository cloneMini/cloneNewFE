import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../component/Header";

import { actionCreators as userActions } from "../redux/modules/user";
import { idVal, idVal1 } from "../shared/validation";

const SignUp = (props) => {
  const dispatch = useDispatch();

  const dupState = useSelector((state) => state.user.is_login);


  const [email, setEmail] = React.useState("");
  const [nickName, setNickName] = React.useState("");
  const [nickCheck, setNickCheck] = React.useState("");
  const [userProfile, setUserProfile] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [pwdCheck, setPwdCheck] = React.useState("");
  const [pwdCheck2, setPwdCheck2] = React.useState("");
  const [emailCheck, setEmailCheck] = React.useState("");

  console.log(email, password, nickName);

  const onChange = useCallback(e => {
    setUserProfile(e.target.value)
  },[])

  const checkEmail = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      console.log(e.target.value);
      if (e.target.value === "") {
        setEmailCheck("아이디를 입력해주세요.");
        return;
      }
      if (!idVal1(e.target.value)) {
        setEmailCheck("아이디가 형식에 맞지 않습니다.(알파벳4~20자)");
        console.log("아이디입력 실패");
        return;
      }
      setEmailCheck("아이디가 형식에 맞습니다.");
    }
  };

  const checkNN = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      console.log(e.target.value);
      if (e.target.value === "") {
        setNickCheck("닉네임을 입력해주세요.");
        return;
      }
      if (!idVal(e.target.value)) {
        setNickCheck("닉네임이 형식에 맞지 않습니다.(알파벳4~20자)");
        console.log("아이디입력 실패");
        return;
      }
      setNickCheck("닉네임이 형식에 맞습니다.");
    }
  };

  const checkPW = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "") {
        setPwdCheck("패스워드를 입력해주세요.");
        return;
      }
      if (e.target.value.length < 4) {
        setPwdCheck("패스워드를 확인해주세요.");
        return;
      }
      if (!idVal(e.target.value)) {
        setPwdCheck("패스워드를 확인해주세요.");
      }
    }
    setPwdCheck("사용가능한 패스워드입니다.")
  };

  const checkPW2 = (e) => {
    if (e.key === "Enter") {
    if (e.target.value === "") {
      setPwdCheck2("패스워드를 한 번 더 입력해주세요.");
      return;
    }
    if (e.target.value.length < 4) {
      setPwdCheck2("패스워드를 한 번 더 확인해주세요.");
      return;
    }
    if (e.target.value !== password) {
      setPwdCheck2("패스워드가 일치하지 않습니다!");
    }
    setPwdCheck2("패스워드가 일치합니다.");
  }
}

  const signup = () => {
    if (emailCheck!=="아이디가 형식에 맞습니다."
    || nickCheck!=="닉네임이 형식에 맞습니다."
    || pwdCheck!=="사용가능한 패스워드입니다."
    || pwdCheck2!=="패스워드가 일치합니다.")

    dispatch(userActions.signupDB(email, password, nickName));
  };

  return (
    <>
      <Header />
      <LoginBody>
        <LoginBox>
          <UpperDiv>
            <div>회원가입</div>
          </UpperDiv>
          <DownDiv>
            <Welcome>에어비앤비에 오신 것을 환영합니다.</Welcome>
            <InputUpDiv>
              <Input
                name="Email"
                placeholder="Email"
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onKeyPress={(e) => {
                  checkEmail(e);
                }}
              ></Input>
              <P>{emailCheck}</P>
            </InputUpDiv>
            <InputMidDiv>
              <Input
                placeholder="닉네임"
                value={nickName}
                onChange={(e) => {
                  setNickName(e.target.value);
                }}
                onKeyPress={(e) => {
                  checkNN(e);
                }}
              ></Input>
              <P>{nickCheck}</P>
            </InputMidDiv>
            <InputMidDiv>
              <Input
                placeholder="프로필이미지를 넣어주세요(URL)"
                onChange={onChange}
                value={userProfile}
              ></Input>
            </InputMidDiv>
            <InputMidDiv>
              <Input
                placeholder="비밀번호"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onKeyPress={(e) => {
                  checkPW(e);
                }}
              ></Input>
              <P>{pwdCheck}</P>
            </InputMidDiv>
            <InputDownDiv>
              <Input
                placeholder="비밀번호 확인"
                type="password"
                value={password2}
                onChange={(e) => {
                  setPassword2(e.target.value);
                }}
                onKeyPress={(e) => {
                  checkPW2(e);
                }}
              ></Input>
              <P>{pwdCheck2}</P>
            </InputDownDiv>
            <ContinueDiv>
              <Continue
                onClick={() => {
                  signup();
                }}
              >
                가입
              </Continue>
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
  padding: 80px;
`;

const LoginBox = styled.div`
  height: 720px;
  width: 100%;
  max-width: 568px;
  border: 1.5px solid rgb(235, 235, 235);
  border-radius: 12px;
  position: relative;
  margin-top: 32px 0px;
  overflow: visible;
  box-sizing: border-box;
  bottom: 24px;
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
const P = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: #212121;
  text-align: center;
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
  display: grid;
  box-sizing: border-box;
  border: 1.5px solid rgb(235, 235, 235);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: none;
`;

const InputMidDiv = styled.div`
  display: grid;
  box-sizing: border-box;
  border-left: 1.5px solid rgb(235, 235, 235);
  border-top: 1.5px solid rgb(235, 235, 235);
  border-right: 1.5px solid rgb(235, 235, 235);
`;

const InputDownDiv = styled.div`
  display: grid;
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

export default SignUp;
