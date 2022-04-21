import React from "react";
import styled from "styled-components";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import { getCookie } from "../shared/Cookie";

const CommentBox = (props) => {
  const dispatch = useDispatch();
  const cookie = getCookie('ok');
  const parseToken = (token = 'null') => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
      } catch (e) {
        return null;
      }
  }
  const judged = (commentor, current) => {
    if(!current){
      return false;
    } else {
      current = current.email;
      if(commentor == current){
        return true
      } else {
        return false;
      }
    }
  }
  const deleteCom = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(commentActions.deleteCommentDB(props._id));
      window.alert("댓글이 삭제되었습니다.");
    } else {
      return;
    }
  };
  if (!props.date) {
    return;
  }
  const date1 = props.date?.split(",")[0].split("/");
  return (
    <>
      <Comment>
        <UserProfile >
          <div>
            <UserImage src={props.userProfile} />
          </div>
          <NameDate >
            <UserName> {props.nickName}</UserName>
            <Date> {`${date1[2]}년 ${date1[0]}월`}</Date>
          </NameDate>
        </UserProfile>
        <CommentContent>
          {props.contents}
          {
            judged(props.email, parseToken(cookie)) == true 
            ? <MdClose onClick={deleteCom} style ={{cursor:"pointer", marginLeft:"15px"}} ></MdClose>
            : null
          }
        </CommentContent>
      </Comment>
    </>
  );
};

export default CommentBox;

const Comment = styled.div`
  width: 48%;
  margin: 0px 0px 40px 0px;
  padding: 0px 8px;
  min-height: 160px;
`;

const UserProfile = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserImage = styled.div`
  margin: 0px 12px 16px 0px;
  width: 56px;
  height: 56px;
  border-radius: 50px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const NameDate = styled.div``;

const UserName = styled.div`
  color: #222222;
  font-size: 16px;
  font-weight: 600;
`;

const Date = styled.div`
  color: #717171;
  font-size: 14px;
`;

const CommentContent = styled.div`
  max-width: 450px;
  white-space: normal;
`;
