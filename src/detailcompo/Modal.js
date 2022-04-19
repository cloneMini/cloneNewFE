import React from 'react';
import styled from "styled-components";
const Modal = ({comModalOn, closecomModal}) => {
  return comModalOn?(
     <>
        <Overlay>
      <Container >
        <Contents>
        <div> 모달 만들어보기</div>

    <button onClick={closecomModal}>닫기</button>
    </Contents>
      </Container>
      </Overlay>
    </>
  ):(null);
};

export default Modal;


const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;

  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

`;


const Contents = styled.div`
  position: relative;
  top: 0px;
  padding: 0 auto;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  text-align: center;
  width: 50%;
  height: 600px;
`;