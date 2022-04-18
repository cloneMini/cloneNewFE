import React from "react";
import styled from "styled-components";
import airprotect from "./Imagegroup/airprotect.PNG"
import { GoStar } from "react-icons/go";
import { RiShieldCheckFill } from "react-icons/ri";
const Host = (props) => {

  return (
    <>

    {/* 호스트 프로필 */}
      <Hostprofile >
        <HostImage src={props.userProfile}></HostImage>
        <div >
          <HostName>호스트:{props.nickName}님</HostName>
          <HostDate>회원 가입일: 2022년 4월</HostDate>
        </div>
      </Hostprofile>
      
      {/* 아래 내용 */}
      <Container >
        <LeftBox >
          <After >
            <After 후기>
              <span>
                <GoStar
                  style={{
                    color: "#ff385c",
                    fontSize: "21px",
                    marginTop: "2px",
                  }}
                />
              </span>
              <AfterC> 후기 {props.postCommentCnt}개 </AfterC>
            </After>
            <After style={{ marginLeft: "24px" }} 인증>
              <span>
                <RiShieldCheckFill
                  style={{
                    color: "#ff385c",
                    fontSize: "18px",
                    marginTop: "3px",
                  }}
                />
              </span>
              <AfterC>본인 인증 완료</AfterC>
            </After>
          </After>

          <HostIntro >
            Hi, I'm Bella from South Korea. I love travelling, and believe you
            do too. That is one of the main reasons i started hosting in airbnb.
            Wanted to share give good experience and mem…
          </HostIntro>
          <ReadMore>더 읽기</ReadMore>

          <div style={{ fontWeight: "600", marginTop: "24px" }}>
            공동 호스트
          </div>

          <Hostprofile>
            <TeamImage src="https://cdn-icons-png.flaticon.com/512/1941/1941497.png"></TeamImage>
            <div style={{ alignItems: "center", display: "flex" }}>
              Hoontail
            </div>
          </Hostprofile>
        </LeftBox>

        <RightBox >
          <div style={{ paddingLeft: "8px" }}>
            <Answer>응답률: 100%</Answer>
            <Answer>응답 시간:1시간 이내</Answer>
            <CallMe >
              <div
                style={{ padding: "13px 23px", cursor: "pointer" }}
                onClick={() => {
                  window.alert("010-6646-6904");
                }}
              >
                제작자에게 연락하기
              </div>
            </CallMe>
            <Safety >
              <span ><img src={airprotect}  style={{paddingTop:"4px"}} /></span>
              <SafetyText>안전한 결제를 위해 에어비앤비 웹사이트나 앱<br/> 외부에서 송금하거나 대화를 나누지 마세요.</SafetyText>
            </Safety>
          </div>
        </RightBox>
      </Container>
    </>
  );
};

export default Host;

const Container = styled.div`
  color: #222222;
  display: flex;
  flex-direction: row;
`;

const LeftBox = styled.div`
  width: 41.6%;
`;

const RightBox = styled.div`
  margin-left: 95px;
`;

const Hostprofile = styled.span`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
`;

const HostImage = styled.div`
  margin: 0px 12px 16px 0px;
  width: 64px;
  height: 64px;
  border-radius: 50px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 16px;
`;

const TeamImage = styled.div`
  margin: 12px 12px 16px 0px;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 12px;
`;

const HostName = styled.div`
  font-size: 22px;
  color: #222222;
  font-weight: 600;
`;

const HostDate = styled.div`
  color: #717171;
  font-size: 14px;
  padding-top: 8px;
`;

const After = styled.div`
  color: #222222;
  display: flex;
  flex-direction: row;
`;
const AfterC = styled.div`
  color: #222222;
  margin-left: 12px;
`;

const HostIntro = styled.div`
  margin-top: 16px;
`;
const ReadMore = styled.div`
  font-weight: 600;
  text-decoration: underline;
  margin-top: 3px;
`;

const Answer = styled.div`
  margin-bottom: 16px;
`;

const CallMe = styled.div`
  border-radius: 8px;
  border: 1px solid black;
  min-width: 195px;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
  margin-top: 20px;
`;

const SafetyText = styled.div`
font-size: 12px;
margin-left: 12px;

`
const Safety = styled.div`
 display: flex;
  flex-direction: row;
  margin-top: 24px;
`
