import React from "react";
import styled from "styled-components";
import CommentBox from "./CommentBox";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useParams } from "react-router-dom";
import { GoStar } from "react-icons/go";
const Comment = (props) => {
  const dispatch = useDispatch();
  const params = useParams()
  const [comment, setComment] = React.useState("");
  const post = useSelector((state) => state.comment.list.post)
  const comment_list = useSelector((state) => state.comment.list.comment)
  
  console.log(comment_list)
  
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
    setComment("")
  };

  return (
    <>
      <Wrap>
        <CommentTitle>
          <span><GoStar  style={{ color: "#ff385c", fontSize: "21px", marginTop:"5px" }}/></span>
          <CommentCnt>4.76 · 후기 {post.postCommentCnt}개</CommentCnt>
        </CommentTitle>
        <WriteComment 후기 작성>
          <input type="text" value={comment} onChange={handleform} />
          <button onClick={addComment}>작성하기</button>
        </WriteComment>

        <CommentWrap 댓글들만 싸기>
          {comment_list.map((c, index) => {
           if(index<6) return <CommentBox {...c}/>

          })}
          
        </CommentWrap>
        <OverComment>
          <p style={{ margin: "0px", padding: "13px 23px" }}>
            후기 {post.postCommentCnt}개 모두 보기
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

const CommentCnt = styled.div`
  font-size: 22px;
  color: #222222;
  margin-left: 8px;
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
  min-width: 180px;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
`;
