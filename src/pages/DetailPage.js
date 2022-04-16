import React from "react";
import styled from "styled-components";
import Title from "../detailcompo/Title";
import TitleImg from "../detailcompo/TitleImg";
import Introduce from "../detailcompo/Introduce";
import Header from "../component/Header";
import ScrollEffect from "../detailcompo/ScrollEffect";
const DetailPage = () => {
  return (
    <>
    <Header />
    <ScrollEffect/>
        <Wrap>
        <Title></Title>
        <TitleImg></TitleImg>
         <Introduce></Introduce>
        </Wrap>
       
     
 
   
    </>
  );
};

export default DetailPage;

const Wrap = styled.div`

  max-width: 1128px;
  /* max-width: 1128px; */

flex-direction: column;
margin: auto;

padding: 24px 80px 0px 80px;

`;

// const Container = styled.div`
// width: 100%;
// height: 100%;
// min-height: 100vh;
// min-width: 100vw;
// justify-content: center;
// display: flex;
// `

