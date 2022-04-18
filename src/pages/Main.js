import React from "react";
import styled from "styled-components";
import MainHeader from "../component/MainHeader";

const Main = () => {
    return (
        <>
        <WholeBody>
            <MainHeader />
                <Box1>
                    <PinkBox>
                    <Text>10만 명에 달하는 우크라이나 피란민에게 임시 숙소를 제공해주세요</Text>
                    <PinkBtn>
                        자세히 알아보기
                    </PinkBtn>
                    </PinkBox>
                   
                </Box1>
        </WholeBody>
        </>
    )
}
const WholeBody = styled.body`
background-color:black;
`

const Box1 = styled.div`
margin-top:60px;
`
const PinkBox = styled.div`
width:90vw;
height:42vh;
margin:0 10vh;
background-color:#FF385C;
display:grid;
border-radius:10px;
`
const Text = styled.div`
font-size:50px;
font-weight:600;
color:#ffffff;
text-align:center;
margin:auto 14vw;
`

const PinkBtn = styled.button`
background-color:transparent;
width:120px;
height:40px;
margin:10px auto;
font-size:16px;
font-weight:500;
color:white;
border:1px white solid;
border-radius:5px ;
`

export default Main;