import React from "react";
import styled from "styled-components";
import CommentBox from "./CommentBox";
import { useDispatch } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useParams } from "react-router-dom";
const Comment = () => {
  const dispatch = useDispatch();
  const params = useParams()
  const [comment, setComment] = React.useState("");

  const handleform = (e) => {
    setComment(e.target.value);
  };

  const addComment = () => {
    if(comment === ""){
      window.alert("내용을 입력해주세요!")
      return;
    }
    dispatch(commentActions.addCommentDB(comment));
    window.alert("작성이 완료 되었습니다!")
  };

  return (
    <>
      <Wrap>
        <CommentTitle>
          <span>아이콘</span>
          <CommnetCnt>4.76 및 comment.length</CommnetCnt>
        </CommentTitle>
        <WriteComment 후기 작성>
          <input type="text" value={comment} onChange={handleform} />
          <button onClick={addComment}>작성하기</button>
        </WriteComment>

        <CommentWrap 댓글들만 싸기>
          <CommentBox />
        </CommentWrap>
        <OverComment>
          <p style={{ margin: "0px", padding: "13px 23px" }}>
            후기 x개 모두 보기
          </p>
        </OverComment>
      </Wrap>
    </>
  );
};

export default Comment;

const Wrap = styled.div`
  border-top: 1px solid rgb(221, 221, 221);
  width: 100%;
  text-align: left;
  padding: 48px 0px;
`;

const CommentTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 0px 32px 0px;
`;

const CommnetCnt = styled.div`
  font-size: 22px;
  color: #222222;
  margin-left: 15px;
  font-weight: 600;
`;

const WriteComment = styled.div`
  margin-bottom: 32px;
`;

const CommentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
`;

const OverComment = styled.div`
  border-radius: 5px;
  border: 1px solid black;
  width: 180px;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
`;
