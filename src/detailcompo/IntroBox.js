import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { BsDoorOpen, BsKey } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";
import { BiBed } from "react-icons/bi";
import { MdBed } from "react-icons/md";
import { GoKeyboard } from "react-icons/go";
import Calender1 from "../component/Calender";

const IntroBox = () => {
  const post = useSelector((state) => state.comment.list.post[0]);
  console.log(post)
  return (
    <>
      {/* 추가 설명 */}
      <Wrap>
        <TextWrap>
          <TextBox>
            <BsDoorOpen style={{ fontSize: "28px", paddingTop: "12px" }} />
            <Pgroup>
              <TitleP>셀프 체크인</TitleP>
              <IntroP>키패드를 이용해 체크인하세요.</IntroP>
            </Pgroup>
          </TextBox>

          <TextBox>
            <MdOutlinePlace style={{ fontSize: "28px", paddingTop: "12px" }} />
            <Pgroup>
              <TitleP>훌륭한 숙소 위치</TitleP>
              <IntroP>
                최근 숙박한 게스트 중 95%가 위치에 별점 5점을 준 숙소입니다.
              </IntroP>
            </Pgroup>
          </TextBox>
          <TextBox1>
            <BsKey style={{ fontSize: "28px", paddingTop: "12px" }} />
            <Pgroup>
              <TitleP>순조로운 체크인 과정</TitleP>
              <IntroP>
                최근 숙박한 게스트 중 95%가 체크인 과정에 별점 5점을 준
                숙소입니다.
              </IntroP>
            </Pgroup>
          </TextBox1>
        </TextWrap>
      </Wrap>
      {/* 작성자 게시글 내용 */}
      <Wrap>
        <TextWrap1>
          {post.postDesc}

          <span
            style={{
              fontWeight: "600",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => {
              window.alert("comming soon");
            }}
          >
            더 보기
          </span>
        </TextWrap1>
      </Wrap>
      {/* 숙박 장소 */}
      <Wrap style={{ padding: "48px 0px 100px" }}>
        <SleepZone>
          <SleepP>숙박 장소</SleepP>
          <BadBox>
            <BadContent style={{ marginBottom: "16px" }}>
              <BiBed style={{ fontSize: "26px" }} />
              <MdBed style={{ fontSize: "26px", marginLeft: "6px" }} />
            </BadContent>
            <BadContent
              style={{
                marginBottom: "8px",
                fontSize: "16px",
                fontWeight: "800",
              }}
            >
              침실
            </BadContent>
            <BadContent style={{ fontSize: "14px" }}>
              퀸사이즈 침대 1개, 소파 1개
            </BadContent>
          </BadBox>
        </SleepZone>
      </Wrap>
      {/* 숙소 편의 시설 */}
      <Wrap style={{ paddingTop: "48px" }}>
        <SleepP> 편의 시설 추가될 공간 </SleepP>
        <Facilities>
          <HalfFac>
            <ImotiText>
              <span> 이모티</span>
              <div>아무거나</div>
            </ImotiText>
            <ImotiText>
              <span> 이모티</span>
              <div>아무거나</div>
            </ImotiText>
            <ImotiText>
              <span> 이모티</span>
              <div>아무거나</div>
            </ImotiText>
          </HalfFac>
          <HalfFac>
            <ImotiText>
              <span> 이모티</span>
              <div>아무거나</div>
            </ImotiText>
            <ImotiText>
              <span> 이모티</span>
              <div>아무거나</div>
            </ImotiText>
          </HalfFac>
        </Facilities>
      </Wrap>
      {/* 달력 들어가야 되는데 이미지로 할지 고민중  */}
      <Wrap style={{ paddingTop: "48px" }}>
        <div>
          <SleepP style={{ padding: "0px 0px 0px 0px", lineHeight: "25px" }}>
            체크인 날짜를 선택해주세요.
          </SleepP>
          <IntroP>여행 날짜를 입력하여 정확한 요금을 확인하세요.</IntroP>
        </div>

        <Calender1></Calender1>

        <Cfooter>
          <div style={{ marginLeft: "24px", width: "16px" }}>
            <GoKeyboard style={{ fontSize: "22px" }} />
          </div>
          <Del> 날짜 지우기 </Del>
        </Cfooter>
      </Wrap>
    </>
  );
};

export default IntroBox;

const Wrap = styled.div`
  border-top: 1px solid rgb(221, 221, 221);

  padding: 32px 0px;
  text-align: left;
  width: 650px;
  align-items: center;
`;

const TextBox = styled.div`
  flex-direction: row;
  font-size: 16px;
  margin-bottom: 16px;
  display: flex;
  margin: 0px 0px 5px 0px;
`;
const TextBox1 = styled.div`
  font-size: 16px;
  flex-direction: row;
  display: flex;
`;

const Pgroup = styled.div`
  margin-left: 16px;
  display: block;
`;

const TitleP = styled.p`
  font-size: 16px;
  line-height: 5px;
  font-weight: 800;
  color: rgb(34, 34, 34);
`;
const IntroP = styled.p`
  font-size: 14px;
  line-height: 8px;
  color: rgb(113, 113, 113);
`;

const TextWrap1 = styled.span`
  line-height: 24px;
  max-width: 450px;
  padding-bottom: 16px;
  flex-direction: column;
  display: flex;
  min-height: 182px;
`;
const TextWrap = styled.span``;

const SleepZone = styled.div`
  display: flex;
  flex-direction: column;
  width: 207px;
  height: 163px;
`;

const SleepP = styled.div`
  font-size: 22px;
  margin: 0px;
  font-weight: 600;
  padding-bottom: 24px;
`;

const BadBox = styled.div`
  border: 1px solid #dddddd;
  padding: 24px;
  border-radius: 10px;
`;

const BadContent = styled.div``;

const Facilities = styled.div`
  display: flex;
  flex-direction: row;
`;

const HalfFac = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
`;

const ImotiText = styled.div`
  display: flex;
  flex-direction: row;
`;

const Calender = styled.div`
  background-color: #e7e7e7;
  width: 680px;
  height: 315px;
`;

const Cfooter = styled.div`
  justify-content: space-between;
  display: flex;
  width: 695px;
`;

const Del = styled.div`
margin-right: 10px; 
font-size :14px;
text-decoration: underline;
font-weight: 600;

`