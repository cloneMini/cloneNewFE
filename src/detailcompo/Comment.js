import React from "react";
import styled from "styled-components";
const Comment = () => {
  return (
    <>
      <Wrap 전체싸기 지도로 재활용 가능>
        <div>평점 및 후기 갯수 </div>
        
        <div>
          총 댓글싸기
          <div>
            코맨트 하나 싸기
            
            <div 이름 날짜 이미지>
            <div>유저 프로필이미지 </div>
            <div 이름이랑 날짜 싸기>
              <div> 유저 이름</div>
              <div> 작성 날짜</div>
            </div>
            
            
            </div>
            <div>댓글내용</div>
          </div>


        </div>
      </Wrap>
    </>
  );
};

export default Comment;




const Wrap = styled.div`
border-top: 1px solid rgb(221, 221, 221);



`