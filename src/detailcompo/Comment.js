import React from "react";
import styled from "styled-components";
import CommentBox from "./CommentBox";
import KakaoMap from "./KakadMap";
import Host from "./Host";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useParams } from "react-router-dom";
import { GoStar } from "react-icons/go";

const Comment = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [comment, setComment] = React.useState("");
  const post = useSelector((state) => state.comment.list.post);
  const comment_list = useSelector((state) => state.comment.list.comment);

  // console.log(post)

  const handleform = (e) => {
    setComment(e.target.value);
  };

  const addComment = () => {
    if (comment === "") {
      window.alert("내용을 입력해주세요!");
      return;
    }
    dispatch(commentActions.addCommentDB(comment,'625cc6e4fe68645e2855bca9'));
    window.alert("작성이 완료 되었습니다!");
    setComment("");
  };

  return (
    <>
      {/* 코맨트 */}
      <Wrap>
        <CommentTitle>
          <span>
            <GoStar
              style={{ color: "#ff385c", fontSize: "21px", marginTop: "5px" }}
            />
          </span>
          <CommentCnt>4.76 · 후기 {comment_list.length}개</CommentCnt>
        </CommentTitle>
        <WriteComment 후기 작성>
          <InputCom type="text" value={comment} onChange={handleform} />
          <AddCom onClick={addComment}>작성하기</AddCom>
        </WriteComment>

        <CommentWrap 댓글들만 싸기>
          {comment_list.map((c, index) => {
            if (index < 6) return <CommentBox {...c} />;
          })}
        </CommentWrap>
        <OverComment>
          <p style={{ margin: "0px", padding: "13px 23px" }}>
            후기 {comment_list.length}개 모두 보기
          </p>
        </OverComment>
      </Wrap>
      {/* 지도 들어갈부분 */}
      <Wrap>
        <KakaoMap {...post} />
      </Wrap>
         {/* 호스트 소개 */}
          <Wrap>
               <Host {...post} />
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
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const AddCom = styled.button`
  padding: 12px 16px 12px 16px;
  border: none;
  box-shadow: #e51d52 0px 0px 0px 1px inset;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  cursor: pointer;
  color: #ffffff;
  background-color: #e51d52;
  font-weight: 600;
`;

const CommentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
`;

const OverComment = styled.div`
  border-radius: 8px;
  border: 1px solid black;
  min-width: 180px;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
`;

const InputCom = styled.input`
  cursor: text;
  display: flex;
  min-height: unset;
  width: 65%;
  margin: 0px;
  border: none;
  color: rgb(34, 34, 34);
  background-color: rgb(247, 247, 247);
  height: 24px;
  align-items: center;
  padding: 12px 12px 12px 16px;

  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  box-shadow: rgb(176 176 176) 0px 0px 0px 1px inset;
`;
