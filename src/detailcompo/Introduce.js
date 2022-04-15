import React from "react";
import styled from "styled-components";
import TitleBox from "./TitleBox";
import FollowBar from "./FollowBar";
import IntroBox from "./IntroBox";
const Introduce = () => {
  return (
    <>
      <IntroContainer>
        <div>
          <TitleBox />
          <IntroBox></IntroBox>
        </div>
      

        <div>
          <FollowBar />
        </div>
      </IntroContainer>
    </>
  );
};

export default Introduce;

const IntroContainer = styled.div`
  justify-content: space-between;
  background-color: gray;
  flex-direction: row;
  display: flex;
  height: 100%;
`;
