import React from "react";
import styled from "styled-components";
import { BsDoorOpen, BsKey } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";

const IntroBox = () => {
  return (
    <>
      <Wrap>
        <TextWrap>
          <TextBox>
            <BsDoorOpen style={{ fontSize: "24px", paddingTop: "12px" }} />
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

      <Wrap>
        <TextWrap1>
          이 방은 코엑스, 도심공항 터미널, 현대백화점, 삼성역 근처에 위치합니다.
          건물이름은 신안메트로칸 이고 이방은 5층 입니다. <br />
          <br />
          이방은 남향이지만 햇볕이 들지 않습니다. 10미터 거리에 다른건물이 있어
          전망이 좋지 않습니다. <br />
          <br />{" "}
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
            더 보기{" "}
          </span>
        </TextWrap1>
      </Wrap>

      <Wrap>


      </Wrap>
    </>
  );
};

export default IntroBox;

const Wrap = styled.div`
  border-top: 1px solid rgb(221, 221, 221);

  padding: 32px 0px;
  text-align: left;

  align-items: center;
  display: flex;
`;

const TextBox = styled.div`
  flex-direction: row;
  font-size: 16px;
  margin-bottom: 16px;
  display: flex;
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
  font-size: 15px;
  line-height: 5px;
  color: rgb(113, 113, 113);
`;

const TextWrap1 = styled.span`
  line-height: 24px;
  max-width: 450px;
`;
const TextWrap = styled.span``;
