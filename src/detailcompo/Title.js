import React from "react";
import styled from "styled-components";

const Title = (props) => {
  const [ScrollY, setScrollY] = React.useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = React.useState(false);
  function handleScroll() {
    if (ScrollY > 599) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }
  React.useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  return (
    <>
      {ScrollActive ? <FixedNav><FixdeNavtext>ㅇㅇㅇ</FixdeNavtext></FixedNav> : null}
      <Wrap>
        <PostTitle>05_AA음성 Self_quarantine ok</PostTitle>

        <Btngroup>
          <CommentLocal>
            <p style={{ marginRight: "5px" }}>별 comment.length ·</p>
            <p style={{ color: "gray" }}>post.adress</p>
          </CommentLocal>

          <div>
            <ShareBtn>공유하기</ShareBtn>
            저장
          </div>
        </Btngroup>
      </Wrap>
    </>
  );
};

export default Title;

const Wrap = styled.div``;

const PostTitle = styled.h1`
  display: block;
  text-align: left;
  margin-bottom: 5px;
  color: #222222;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif !important;
`;

const Btngroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;
  line-height: 5px;
`;

const CommentLocal = styled.div`
  display: flex;
  flex-direction: row;
`;

const ShareBtn = styled.span`
  margin-right: 25px;
`;

const FixedNav = styled.div`
  width: 100%;
  top: 0;
 
  border-radius: 0;
  text-align: left; 
  background-color: white;
  position: fixed;
  color: #222222;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  height: 80px;
  border-bottom: 1px solid #222222;
`;

const FixdeNavtext = styled.div`
max-width: 1128px;

`