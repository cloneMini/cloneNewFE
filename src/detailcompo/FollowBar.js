import React from "react";
import styled from "styled-components";
const FollowBar = () => {
  return (
    <BarContainer>
    <NavBar>

    <NavBox>

    </NavBox>

    </NavBar>
    </BarContainer>
  );
};

export default FollowBar;

const BarContainer = styled.div`
  background-color: darkblue;
  min-width: 500px;
  width: 100%;
  height: 100%;
  align-items: stretch;
`;

const NavBar = styled.div`
  background-color: beige;
  width: 372px;
  align-items: stretch;
  float: right;
  height: 328px;
  border: 1px solid rgb(221, 221, 221);
   
    padding: 24px;
    box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;


`;

const NavBox = styled.div`
width: 100%;
height: 100%;
background-color: #ffffff;
box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
border-radius: 12px;
`