import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ReactComponent as SearchFry } from "../image/search2.svg";

const MainSearch = () => {
  const history = useHistory();
    return (
        <>
        <Second onClick={() => history.replace("/listpage")}>
            <SearchTblLeft>
              <DivForHoverLeft/>
              <DivForLine>
                <Bold>위치</Bold>
                <NotBold>어디로 여행가세요?</NotBold>
              </DivForLine>
            </SearchTblLeft>
            <SearchTbl>
            <DivForHover/>
              <DivForLine>
                <Bold>체크인</Bold>
                <NotBold>날짜 입력</NotBold>
              </DivForLine>
            </SearchTbl>
            <SearchTbl>
            <DivForHover/>
              <DivForLine>
                <Bold>체크아웃</Bold>
                <NotBold>날짜 입력</NotBold>
              </DivForLine>
            </SearchTbl>
            <SearchTbl>
            <DivForHover/>
              <Bold>인원</Bold>
              <NotBold>게스트 추가</NotBold>
            </SearchTbl>
            <SearchTblRight>
            <DivForHover/>
              <div>
                <SearchIcon>
                  <SearchFry fill="white"/>
                </SearchIcon>
              </div>
            </SearchTblRight>
          </Second>
        </>
    )
}

const Second = styled.div`
  margin: 0 auto;
  min-width:420px;
  display: flex;
  vertical-align: middle;
  cursor:pointer;
`;

const DivForHoverLeft = styled.div`
width:100%;
min-width:180px;
`

const DivForHover = styled.div`
width:100%;
min-width:160px;
`
const DivForLine = styled.div`
border-right:1px solid rgb(190,190,190);
background:transparent;
border-top-left-radius: 12px;
`

const SearchTblLeft = styled.div`
  background: #ffffff;
  width: 100%;
  min-width: 180px;
  height: 60px;
  display: inline-block;
  align-items: center;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
`;

const SearchTbl = styled.div`
  background: #ffffff;
  width: 100%;
  min-width: 140px;
  height: 60px;
  display: inline-block;
  align-items: center;
`;

const SearchTblRight = styled.div`
  background: #ffffff;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  position: relative;
`;

const Bold = styled.div`
  font-weight: 700;
  font-size: 14px;
  margin: 10px 50px;
  text-align: left;
`;
const NotBold = styled.div`
  font-weight: 400px;
  font-size: 15px;
  margin: 10px 0px 10px 50px;
  text-align: left;
`;
const SearchIcon = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 40px;
  background-color: #ff385c;
  margin:20vw -5vw;
  padding:10px 0px 0px 10px;
`;

export default MainSearch;