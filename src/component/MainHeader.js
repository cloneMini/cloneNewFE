import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";
import { profile1, profile2 } from "../image/index";
import { ReactComponent as Logo } from "../image/logo.svg";
import { ReactComponent as Globe } from "../image/globe.svg";
import MainSearch from "./MainSearch";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { useHistory } from "react-router-dom";

const throttle = function (callback, waitTime) {
  let timerId = null;
  return (e) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback.call(this, e);
      timerId = null;
    }, waitTime);
  };
};

const MainHeader = () => {
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
  };

  const throttleScroll = throttle(handleScroll, 50);

  useEffect(() => {
    documentRef.current.addEventListener("scroll", throttleScroll);
    return () =>
      documentRef.current.removeEventListener("scroll", throttleScroll);
  }, [pageY]);

  const history = useHistory();
  const [ok, setOk] = React.useState(false);
  const dispatch = useDispatch();
  React.useEffect(() => {
    let cookie = document.cookie;
    console.log(cookie);
    if (cookie) {
      setOk(true);
    } else {
      setOk(false);
    }
  }, []);

  if (ok) {
    return (
      <>
        <HeadArea>
          <HeadDiv className={hide && "hide"}>
            <Center>
              <LogoDiv>
                <Logo fill="white" />
              </LogoDiv>
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
                  }}>
                  <img src={profile1} width="30%" />
                  <img src={profile2} width="55%" />
                </ProfileBtn>
              </LeftDiv>
            </Center>
            <MainSearch />
          </HeadDiv>
        </HeadArea>
      </>
    );
  } else
    return (
      <>
        <HeadArea>
          <HeadDiv className={hide && "hide"}>
            <Center>
              <LogoDiv>
                <Logo fill="white" />
              </LogoDiv>
              <List>
                <ListItem>숙소</ListItem>
                <ListItem>체험</ListItem>
                <ListItem>온라인 체험</ListItem>
              </List>
              <LeftDiv>
                <PostWriteBtn>게시물 작성</PostWriteBtn>
                <GlobeBtn>
                  <Globe fill="white" onClick={() => history.push("/user/signUp")}/>
                </GlobeBtn>
                <ProfileBtn onClick={() => history.push("/user/login")}>
                  <img src={profile1} width="30%" />
                  <img src={profile2} width="55%" />
                </ProfileBtn>
              </LeftDiv>
            </Center>
            <MainSearch onClick={() => history.push("/listpage")}/>
          </HeadDiv>
        </HeadArea>
      </>
    );
};

const HeadArea = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
`;

const HeadDiv = styled.div`
  width: 100%;
  height: 180px;
  display: grid;
  border-bottom: solid 0.2px #eeeeee;
  background: black;
  box-sizing: border-box;
  margin: 10px 0px -10px 0px;
  padding: 0px;
  border-bottom-style: hidden;
  transition: 0.2s ease;
  &.hide {
    transform: translateY(-80px);
    position: fixed;
  }
`;
const LogoDiv = styled.div`
  display: inline-block;
`;

const List = styled.ul`
  list-style: none;
  margin: auto;
  padding: 0px;
  color: #ffffff;
  font-weight: 400;
  cursor:pointer;
`;
const ListItem = styled.li`
  display: inline-block;
  text-decoration: none;
  padding: 0px;
  margin: 0px 16px;
`;

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
  cursor:pointer;
  :hover {
    background: #393939;
    width: 100px;
    height: 42px;
    border-radius: 21px;
  }
  &.hide {
    transform: translateY(-80px);
    position: fixed;
  }
`;

const GlobeBtn = styled.div`
  width: 42px;
  height: 42px;
  margin: 8px 5px 10px 10px;
  align-items: center;
  justify-content: center;
  border-radius: 21px;
  cursor:pointer;
  :hover {
    background: #393939;
    width: 42px;
    height: 42px;
    border-radius: 21px;
    margin: 0px 20px;
  }
`;

const Center = styled.div`
  min-width: 1150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center !important;
  margin: auto;
  &.hide {
    transform: translateY(180px);
    position: fixed;
  }
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

export default MainHeader;
