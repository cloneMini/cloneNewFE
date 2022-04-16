import React from "react";
import styled from "styled-components";
import { GoStar } from "react-icons/go";

const FollowBar = () => {


  return (
    <>
    
    <BarContainer>
     
      <NavBar>
        <NavBox>
          <NavContent>
            <P>요금을 확인하려면 날짜를 입력하세요.</P>

            <p style={{ margin: "3px 5px 24px 0px", fontWeight: "500" }}>
              <span style={{ marginBottom: "5px" }}>
                <GoStar style={{ color: "#ff385c", width: "13px" }} />
              </span>
              4.76 ·
              <span
                style={{
                  fontWeight: "500",
                  textDecoration: "underline",
                  marginLeft: "4px",
                }}
              >
                comment.length
              </span>
            </p>

            <BoxWrap>
              <NavSbox>
                <HalfBox>
                  <BoxText>체크인</BoxText>
                  <BoxText1>날짜 추가</BoxText1>
                </HalfBox>
                <HalfBox1>
                  <BoxText>체크아웃</BoxText>
                  <BoxText1>날짜 추가</BoxText1>
                </HalfBox1>
              </NavSbox>
              <NavSbox1>
                <BoxText>인원</BoxText>
                <BoxText2>게스트 1명</BoxText2>
              </NavSbox1>
            </BoxWrap>
            <PinkButton>예약 가능 여부 보기</PinkButton>
          </NavContent>
        </NavBox>
      </NavBar>
    </BarContainer>
    </>
  );
};

export default FollowBar;

const BarContainer = styled.div`
  min-width: 500px;
  width: 100%;
  height: 100%;
  align-items: stretch;
`;

const NavBar = styled.div`
  margin-top: 23px;

  width: 372px;
  float: right;
  height: 328px;

  padding: 24px;
`;

const NavBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  border-radius: 12px;
  text-align: left;
  border: 1px solid rgb(221, 221, 221);
`;

const NavContent = styled.div`
  padding: 24px;
`;

const P = styled.p`
  font-weight: 500;
  font-size: 22px;
  color: rgb(34, 34, 34) !important;
  line-height: 27px;
  width: 270px;
  margin: 0px;
  color: #222222;
`;

const NavSbox = styled.div`
  border-bottom: 1px solid #717171;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 56px;
`;
const NavSbox1 = styled.div`
  width: 100%;
  height: 56px;
`;

const HalfBox = styled.div`
  width: 163px;
  border-right: 1px solid #717171;
`;
const HalfBox1 = styled.div`
  width: 163px;
`;

const BoxWrap = styled.div`
  border-radius: 10px;
  border: 1px solid #717171;
`;

const BoxText = styled.p`
  padding: 10px 0px 0px 10px;
  margin: 0px;
  font-size: 10px;
  font-weight: 550;
`;

const BoxText1 = styled.p`
  font-size: 14px;
  color: #717171;
  margin: 0px;
  padding-left: 10px;
`;
const BoxText2 = styled.p`
  font-size: 14px;
  margin: 0px;
  padding-left: 10px;
`;

const PinkButton = styled.button`
  width: 100%;
  margin: 14px 0px;
  height: 50px;
  padding: 0px;
  background-color: #e51d52;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: 550;
  align-items: center;
`;
