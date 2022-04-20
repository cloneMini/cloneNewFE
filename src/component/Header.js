import React from "react";
import styled from "styled-components";
import { logo, search, profile1, profile2, globe } from "../image/index";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Header = () => {
  const history = useHistory();
  const [ok, setOk] = React.useState(false);
  const dispatch = useDispatch();
  React.useEffect(()=>{
    let cookie = document.cookie;
    console.log(cookie);
    if(cookie) {
      setOk(true);
    }else {
      setOk(false);
    }
  },[])
  if (ok) {
    return (
      <HeadDiv>
        <Center>
          <div>
            <img src={logo} width="125px" style={{ paddingLeft: " 15px" }} />
          </div>
          <SearchBtn>
            <SearchTxt>검색 시작하기</SearchTxt>
            <SearchIcon src={search} />
          </SearchBtn>

          <LeftDiv>
            <PostWriteBtn>게시물 작성</PostWriteBtn>
            <div>
              <img src={globe} width="45%" />
            </div>
            <ProfileBtn
              onClick={() => {
                dispatch(userActions.logOutAction());
                console.log('로그아웃');
              }}
            >
              <img src={profile1} width="30%" />
              <img src={profile2} width="55%" />
            </ProfileBtn>
          </LeftDiv>
        </Center>
      </HeadDiv>
    );
  }
  return (
    <HeadDiv>
        <Center>
          <div>
            <img src={logo} width="125px" style={{ paddingLeft: " 15px" }} />
          </div>
          <SearchBtn>
            <SearchTxt>검색 시작하기</SearchTxt>
            <SearchIcon src={search} />
          </SearchBtn>

          <LeftDiv>
            <PostWriteBtn>게시물 작성</PostWriteBtn>
            <div>
              <img src={globe} width="45%" />
            </div>
            <ProfileBtn
              onClick={()=> history.push('/user/login')}
            >
              <img src={profile1} width="30%" />
              <img src={profile2} width="55%" />
            </ProfileBtn>
          </LeftDiv>
        </Center>
      </HeadDiv>
  )
};

const HeadDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  background: #ffffff !important;
`;

const SearchBtn = styled.div`
  background-color: #ffffff;
  margin-left: 45px;
  display: flex;
  height: 48px;
  width: 300px;

  align-items: center;
  padding: 0px 4px;
  justify-content: space-between;

  border: 1px solid #ededed;
  padding-left: 8px;
  border-radius: 24px;
  box-sizing: border-box;
  box-shadow: 1px 2px 3px 0px rgb(239, 239, 239);
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 4px 1px rgb(239, 239, 239);
  }
`;

const SearchIcon = styled.img`
  width: 40px;
`;

const LeftDiv = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  padding-right: 15px;
`;

const PostWriteBtn = styled.button`
  width: 93.54px;
  height: 42px;
  border-radius: 21px;
  border: none;
  background: transparent;
  font-weight: 600;
  text-align: center;
  align-items: center;
  padding: 0px;
  margin: 0px;

  :hover {
    background: #f7f7f7;
  }
`;

const MyPageBtn = styled.img`
  width: 77px;
`;

const SearchTxt = styled.div`
  padding-left: 15px;
  font-size: 14px;
  font-weight: 600;
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
  box-shadow: 1px 2px 3px 0px rgb(239, 239, 239);
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 4px 1px rgb(239, 239, 239);
  }
`;
export default Header;
