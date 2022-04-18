import React from "react";
import styled from "styled-components";
import Title from "../detailcompo/Title";
import TitleImg from "../detailcompo/TitleImg";
import Introduce from "../detailcompo/Introduce";
import Header from "../component/Header";
import ScrollEffect from "../detailcompo/ScrollEffect";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";


const DetailPage = () => {
const dispatch = useDispatch()


React.useEffect(() =>{
  dispatch(commentActions.getCommentDB('625d0f12c0763d6e33351561'))

})

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
color:#222222;
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

