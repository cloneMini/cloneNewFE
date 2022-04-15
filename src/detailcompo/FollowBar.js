import React from "react";
import styled from "styled-components";
const FollowBar = () => {
  return (
    <BarContainer>
    <NavBar>sdf</NavBar>
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
  width: 300px;
  align-items: stretch;
  float: right;
  height: 300px;


`;
