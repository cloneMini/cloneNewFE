import React from "react";
import styled from "styled-components";
import Title from "../detailcompo/Title";
import TitleImg from "../detailcompo/TitleImg";
const DetailPage = () => {
  return (
    <>
      <Container>
        <Title></Title>
        <TitleImg></TitleImg>
      </Container>
    </>
  );
};

export default DetailPage;

const Container = styled.div`

  max-width: 1128px;
  /* min-width: 1128px; */
  display: flex;
flex-direction: column;
height: 100%;
margin: auto;
padding: 100px 80px 0px 80px;

`;
