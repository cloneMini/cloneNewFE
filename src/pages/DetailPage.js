import React from "react";
import styled from "styled-components";
import Title from "../detailcompo/Title";
import TitleImg from "../detailcompo/TitleImg";
import Introduce from "../detailcompo/Introduce";
import Header from "../component/Header";
import DFooter from "../detailcompo/Dfooter"
import ScrollEffect from "../detailcompo/ScrollEffect";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useParams } from "react-router-dom";

const DetailPage = () => {
const dispatch = useDispatch()
const paramsId = useParams().postId
React.useEffect(() =>{
  dispatch(commentActions.getCommentDB(paramsId))
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
         <DFooter/>
        

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

