import React from "react";
import styled from "styled-components";
import TitleBox from "./TitleBox";
import FollowBar from "./FollowBar";
import IntroBox from "./IntroBox";
import Comment from "./Comment";
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
      <Comment/>
    </>
  );
};

export default Introduce;

const IntroContainer = styled.div`
  justify-content: space-between;

  flex-direction: row;
  display: flex;
 
`;
