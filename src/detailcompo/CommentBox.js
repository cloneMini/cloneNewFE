import React from "react";
import styled from "styled-components";
const CommentBox = () => {
  return (
    <>
      <Comment>
        <UserProfile 이름 날짜 이미지>
          <div>
            <UserImage src="https://file.mk.co.kr/meet/neds/2022/02/image_readtop_2022_159433_16452258234951534.jpg" />{" "}
          </div>
          <NameDate 이름이랑 날짜 싸기>
            <UserName> user.userNickname</UserName>
            <Date> comment.date</Date>
          </NameDate>
        </UserProfile>
        <CommentContent>
          클론 코딩은 정말 재밌다 ~! 얘는 왜 줄이 안 왜 줄이 높이좀 고정해라
          죽기싫으면 !!!!!!!!!!!!!!!!!!!!ㅇ하하하하하{" "}
        </CommentContent>
      </Comment>
      <Comment>
        <UserProfile 이름 날짜 이미지>
          <div>
            <UserImage src="https://file.mk.co.kr/meet/neds/2022/02/image_readtop_2022_159433_16452258234951534.jpg" />{" "}
          </div>
          <NameDate 이름이랑 날짜 싸기>
            <UserName> user.userNickname</UserName>
            <Date> comment.date</Date>
          </NameDate>
        </UserProfile>
        <CommentContent>클론 코딩은 정말 재밌다 ~!</CommentContent>
      </Comment>
      <Comment>
        <UserProfile 이름 날짜 이미지>
          <div>
            <UserImage src="https://file.mk.co.kr/meet/neds/2022/02/image_readtop_2022_159433_16452258234951534.jpg" />{" "}
          </div>
          <NameDate 이름이랑 날짜 싸기>
            <UserName> user.userNickname</UserName>
            <Date> comment.date</Date>
          </NameDate>
        </UserProfile>
        <CommentContent>클론 코딩은 정말 재밌다 ~!</CommentContent>
      </Comment>
    </>
  );
};

export default CommentBox;

const Comment = styled.div`
  width: 48%;
  margin: 0px 0px 40px 0px;
  padding: 0px 8px;
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
