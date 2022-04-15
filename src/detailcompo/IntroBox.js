import React from "react";
import styled from "styled-components";
import { BsDoorOpen, BsKey } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";

const IntroBox = () => {
  return (
    <>
      <Wrap>
        <TextWrap>
          <TextBox>
            <BsDoorOpen style={{fontSize :"24px"}}/> 셀프 체크인
          </TextBox>
          <TextBox>
            <MdOutlinePlace style={{fontSize :"24px"}} />
          </TextBox>
          <TextBox>
            <BsKey style={{fontSize :"24px"}} />
          </TextBox>
        </TextWrap>
      </Wrap>
      <Wrap></Wrap>
      <Wrap></Wrap>
    </>
  );
};

export default IntroBox;

const Wrap = styled.div`
  border-top: 1px solid black;
  min-height: 244px;
  height: 244px;
  padding: 32px 0px;
  text-align: left;
  align-items: center;
  display: flex;
`;
const TextBox = styled.div`
  font-size: 16px;
  margin-bottom: 35px;
  
`;

const TextWrap = styled.div``;
