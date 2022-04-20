import React from "react";
import styled from "styled-components";
import { search, profile1, profile2, globe } from "../image/index";
import { ReactComponent as Logo } from "../image/logo.svg";
import { ReactComponent as Globe } from "../image/globe.svg";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { useHistory } from "react-router-dom";

const MainHeader = () => {
  const history = useHistory();
  const [ok, setOk] = React.useState(false);
  const dispatch = useDispatch();
  React.useEffect(() => {
    let cookie = document.cookie;
    console.log((cookie));
    if (cookie) {
      setOk(true);
    } else {
      setOk(false);
    }
  }, []);

  if (ok) {
    return (
      <>
        <HeadDiv>
          <Center>
            <div display="inline-block">
              <Logo fill="white" />
            </div>
            <List>
              <ListItem>숙소</ListItem>
              <ListItem>체험</ListItem>
              <ListItem>온라인 체험</ListItem>
            </List>
            <LeftDiv>
              <PostWriteBtn>게시물 작성</PostWriteBtn>
              <GlobeBtn>
                <Globe fill="white" />
              </GlobeBtn>
              <ProfileBtn
                onClick={() => {
                  dispatch(userActions.logOutAction());
                }}
              >
                <img src={profile1} width="30%" />
                <img src={profile2} width="55%" />
              </ProfileBtn>
            </LeftDiv>
          </Center>
        </HeadDiv>

        <Whole>
          <Second>
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
              <div margin-left="10px">
                <img src={search} width="70%"></img>
              </div>
            </SearchTblRight>
          </Second>
        </Whole>
      </>
    );
  } else
    return (
      <>
        <HeadDiv>
          <Center>
            <div display="inline-block">
              <Logo fill="white" />
            </div>
            <List>
              <ListItem>숙소</ListItem>
              <ListItem>체험</ListItem>
              <ListItem>온라인 체험</ListItem>
            </List>
            <LeftDiv>
              <PostWriteBtn>게시물 작성</PostWriteBtn>
              <GlobeBtn>
                <Globe fill="white" />
              </GlobeBtn>
              <ProfileBtn onClick={() => history.push("/user/login")}>
                <img src={profile1} width="30%" />
                <img src={profile2} width="55%" />
              </ProfileBtn>
            </LeftDiv>
          </Center>
        </HeadDiv>

        <Whole>
          <Second>
            <SearchTblLeft>
              <Bold>위치</Bold>
              <NotBold>어디로 여행가세요?</NotBold>
            </SearchTblLeft>
            <SearchTbl>
              <Bold>체크인</Bold>
              <NotBold>날짜 입력</NotBold>
            </SearchTbl>
            <SearchTbl>
              <Bold>체크아웃</Bold>
              <NotBold>날짜 입력</NotBold>
            </SearchTbl>
            <SearchTbl>
              <Bold>인원</Bold>
              <NotBold>게스트 추가</NotBold>
            </SearchTbl>
            <SearchTblRight>
              <div margin-left="10px">
                <img src={search} width="70%"></img>
              </div>
            </SearchTblRight>
          </Second>
        </Whole>
      </>
    );
};

const HeadDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  border-bottom: solid 0.2px #eeeeee;
  background: black;
  margin: 10px 0px -10px 0px;
  padding: 0px;
`;

const List = styled.ul`
  list-style: none;
  margin: auto;
  padding: 0px;
  color: #ffffff;
  font-weight: 400;
`;
const ListItem = styled.li`
  display: inline-block;
  text-decoration: none;
  padding: 0px;
  margin: 0px 16px;
`;
const DivForHoverLeft = styled.div`
width:100%;
min-width:220px;
&:hover{
  background: #343434;
}
`

const DivForHover = styled.div`
width:100%;
min-width:220px;
`
const DivForLine = styled.div`
border-right:1px solid rgb(34,34,34);
`
const LeftDiv = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
`;

const PostWriteBtn = styled.button`
  width: 93.54px;
  height: 42px;
  border-radius: 21px;
  border: none;
  color: #ffffff;
  background: transparent;
  font-weight: 600;
  text-align: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  :hover {
    background: #343434;
  }
`;

const GlobeBtn = styled.div`
  width: 42px;
  height: 42px;
  margin: 8px 5px 10px 10px;
  align-items: center;
  justify-content: center;
  border-radius: 21px;
`;

const Center = styled.div`
  min-width: 1150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center !important;
  margin: auto;
`;

const ProfileBtn = styled.button`
  background-color: #ffffff;
  height: 42px;
  width: 80px;
  margin: 0px;
  align-items: center;
  min-width: 0px;
  padding: 0px 4px;
  display: flex;
  justify-content: space-around;
  position: relative;
  border: 1px solid #dddddd;
  padding-left: 8px;
  border-radius: 24px;
  box-sizing: border-box;
  cursor: pointer;
`;

const Whole = styled.div`
  background: black;
  height: 80px;
  display: flex;
`;

const Second = styled.div`
  margin: 0 auto;
  display: flex;
  vertical-align: middle;
`;

const SearchTblLeft = styled.div`
  background: #ffffff;
  width: 100%;
  min-width: 220px;
  height: 60px;
  display: inline-block;
  align-items: center;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  &:hover{
    background:#DDDDDD;
    border-radius:40px;
    min-width:260px;
  }
`;

const SearchTbl = styled.div`
  background: #ffffff;
  width: 100%;
  min-width: 200px;
  height: 60px;
  display: inline-block;
  align-items: center;
`;

const SearchTblRight = styled.div`
  background: #ffffff;
  width: 100%;
  min-width: 100px;
  height: 60px;
  display: flex;
  align-items: center;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  position: relative;
`;

const Bold = styled.div`
  font-weight: 500;
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
export default MainHeader;
