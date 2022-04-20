import React from "react";
import styled from "styled-components";
import CommentBox from "./CommentBox";
import KakaoMap from "./KakadMap";
import Host from "./Host";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useParams } from "react-router-dom";
import { GoStar } from "react-icons/go";
import {
  BsClockFill,
  BsFillDoorOpenFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { GiHolyWater } from "react-icons/gi";
import { MdError } from "react-icons/md";
const Comment = (props) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.comment.list.post);
  const comment_list = useSelector((state) => state.comment.list.comment);
 
  const paramsId = useParams().postId;

  const [comment, setComment] = React.useState("");
  const [comModalOn, setcomModalOn] = React.useState(false);




  const openModal =() =>{
    setcomModalOn(true)
    document.body.style.overflow ="hidden"
  }
  
  const closecomModal = (e) => {
    e.preventDefault()
    setcomModalOn(false);
    document.body.style.overflow ="unset"
 
  };

  
  const handleform = (e) => {
    setComment(e.target.value);
  };

  const addComment = () => {
    if (comment === "") {
      window.alert("내용을 입력해주세요!");
      return;
    }
    dispatch(commentActions.addCommentDB(comment, paramsId));
    window.alert("작성이 완료 되었습니다!");
    setComment("");
  };

  return (
    <>
      <Modal
        comModalOn={comModalOn}
        closecomModal={closecomModal}
        comment_list={comment_list}
      />
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
        <OverComment onClick={openModal
        }>
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

      {/* 이용규칙 */}
      <Wrap>
        <CommentCnt style={{ margin: "0px 0px", paddingBottom: "24px" }}>
          알아두어야 할 사항
        </CommentCnt>
        <RuleFlex>
          <RuleBox>
            <Rule>숙소 이용규칙</Rule>
            <RuleFlex>
              <Iconz>
                <BsClockFill style={{ fontSize: "15px" }} />
              </Iconz>
              <RuleText>체크인: 오후 4:00 - 오전 12:00 </RuleText>
            </RuleFlex>
            <RuleFlex>
              <Iconz>
                <BsClockFill style={{ fontSize: "15px" }} />
              </Iconz>
              <RuleText> 체크아웃 시간: 오전11:00</RuleText>
            </RuleFlex>
            <RuleFlex>
              <Iconz>
                <BsFillDoorOpenFill />
              </Iconz>
              <RuleText> 키패드(으)로 셀프 체크인</RuleText>
            </RuleFlex>
            <SeeMore> 더 보기 {">"}</SeeMore>
          </RuleBox>
          <RuleBox>
            {/* 건강과 안전 */}
            <Rule>건강과 안전</Rule>
            <RuleFlex>
              <Iconz>
                <GiHolyWater style={{ fontSize: "18px" }} />
              </Iconz>
              <RuleText style={{ lineHeight: "20px", marginBottom: "3px" }}>
                에어비앤비의 사회적 거리 두기 및 관련
                <br />
                가이드라인이 적용됩니다.{" "}
              </RuleText>
            </RuleFlex>
            <RuleFlex>
              <Iconz>
                <MdError style={{ fontSize: "18px", marginTop: "5px" }} />
              </Iconz>
              <RuleText> 화재경보기 없음</RuleText>
            </RuleFlex>
            <RuleFlex>
              <Iconz>
                <BsFillCheckCircleFill />
              </Iconz>
              <RuleText> 일산화탄소 경보기 필요 없음</RuleText>
            </RuleFlex>
            <SeeMore> 더 보기 {">"}</SeeMore>
          </RuleBox>
          <RuleBox>
            {/* 환불정책 */}
            <Rule>환불 정책</Rule>
            <RuleFlex>
              <RuleText style={{ lineHeight: "22px" }}>
                이 숙박에 대한 취소 세부 내역을 확인하려면 여행
                <br />
                날짜를 입력하세요.
              </RuleText>
            </RuleFlex>
            <SeeMore> 더 보기 {">"}</SeeMore>
          </RuleBox>
        </RuleFlex>
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
const RuleBox = styled.div`
  padding: 0px 8px;
  width: 378px;
`;

const RuleText = styled.div`
  line-height: 28px;
  color: #222222;
`;

const RuleFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const Iconz = styled.span`
  margin-right: 16px;
  line-height: 28px;
`;

const SeeMore = styled.div`
  font-weight: 600;
  margin-top: 24px;
  text-decoration: underline;
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
  cursor: pointer;
  &:hover{
    text-decoration: underline;
    background-color: #f7f7f7;
  }
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

const Rule = styled.div`
  font-size: 16px;
  color: #222222;
  font-weight: 600;
  margin-bottom: 10px;
`;
