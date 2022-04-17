import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const CommentBox = (props) => {
  // const comment = useSelector((state) => state.comment.list.comment)



  return (
    <>
      <Comment>
        <UserProfile 이름 날짜 이미지>
          <div>
            <UserImage src={props.userProfile} />
          </div>
          <NameDate 이름이랑 날짜 싸기>
            <UserName> {props.nickName}</UserName>
            <Date> {props.commentDate}</Date>
          </NameDate>
        </UserProfile>
        <CommentContent>
          {props.contents}
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
