import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
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
    <CopyRight>
          <YearDiv>© 2022 Airbnb, Inc</YearDiv>
          <CopyRightul>
              <ul>
            <CRli>개인정보 처리방침</CRli>
            <CRli>이용약관</CRli>
            <CRli>사이트맵</CRli>
            <CRli>한국의 변경된 환불 정책</CRli>
            <CRli>회사 세부정보</CRli>
          </ul>
          </CopyRightul>
          <IconDiv>
          </IconDiv>
        </CopyRight>
        </>
  );
};
const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10vh;
  background: f7f7f7;
`;
const ListDiv = styled.div``;
const FooterUl = styled.ul`
  list-style: none;
  font-size: 0.9rem;
  display:inline-block;
`;
const FooterLi = styled.li`
  padding: 10px;
`;
const CopyRight = styled.div`
display:flex;
// border-top: 1px solid rgb(221, 221, 221);
font-size:0.9rem;
padding:10px 20px;
margin:10vh;
`;
const YearDiv = styled.div`
padding-top:13px;
`
const CRli = styled.li`
float:left;
margin:0px 20px;
font-size:0.9rem;
`
const CopyRightul = styled.div`
`

const IconDiv = styled.div`

`
export default Footer;
