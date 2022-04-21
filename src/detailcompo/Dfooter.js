import React from "react";
import styled from "styled-components";

const DFooter = () => {
  return (
    <>
      <Wrap>
        <FooterDiv>
          <ListDiv>
            <FooterUl>
              <b>
                <FooterLi>에어비앤비 지원</FooterLi>
              </b>
              <FooterLi>도움말 센터</FooterLi>
              <FooterLi>안전 정보</FooterLi>
              <FooterLi>예약 취소 옵션</FooterLi>
              <FooterLi>에어비앤비의 코로나19 대응방안</FooterLi>
              <FooterLi>장애인 지원</FooterLi>
              <FooterLi>이웃 민원 신고</FooterLi>
            </FooterUl>
          </ListDiv>
          <ListDiv>
            <FooterUl>
              <b>
                <FooterLi>커뮤니티</FooterLi>
              </b>
              <FooterLi>Airbnb.org: 재난 구호 숙소</FooterLi>
              <FooterLi>아프간 난민 지원</FooterLi>
              <FooterLi>차별 철폐를 위한 노력</FooterLi>
            </FooterUl>
          </ListDiv>
          <ListDiv>
            <FooterUl>
              <b>
                <FooterLi>호스팅</FooterLi>
              </b>
              <FooterLi>호스팅 시작하기</FooterLi>
              <FooterLi>에어커버:호스트를 위한 보호 프로그램</FooterLi>
              <FooterLi>호스팅 자료 둘러보기</FooterLi>
              <FooterLi>커뮤니티 포럼 방문하기</FooterLi>
              <FooterLi>책임감 있는 호스팅</FooterLi>
            </FooterUl>
          </ListDiv>
          <ListDiv>
            <FooterUl>
              <b>
                <FooterLi>소개</FooterLi>
              </b>
              <FooterLi>뉴스룸</FooterLi>
              <FooterLi>새로운 기능에 대해 알아보기</FooterLi>
              <FooterLi>에어비앤비 공동 창업자의 메시지</FooterLi>
              <FooterLi>나도 채용해줘</FooterLi>
              <FooterLi>투자자 정보</FooterLi>
              <FooterLi>에어비앤비 LUXE</FooterLi>
            </FooterUl>
          </ListDiv>
        </FooterDiv>
      
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  border-top: 1px solid rgb(221, 221, 221);
  background-color: #f7f7f7;
  padding: 48px 0px;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
`;



const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  
  width: 1128px;
  background: f7f7f7;
`;
const ListDiv = styled.div``;
const FooterUl = styled.div`
  list-style: none;
  font-size: 0.9rem;
  display: inline-block;
`;
const FooterLi = styled.li`
  padding: 10px;
`;

export default DFooter;
