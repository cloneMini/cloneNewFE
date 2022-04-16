import React from "react";
import styled from "styled-components";
const TitleBox = () => {
  return (
    <>
    <HostWrap>
    
    <TextWrap>
        <TextWho>user.nickName님이 호스팅하는 공동 주택 전체</TextWho>
      <TextInfo>최대 인원2명 · 침실 1개 · 침대1개 · 욕실 1개</TextInfo>
    </TextWrap>
    
    <HostImage src="https://cdn.gukjenews.com/news/photo/202201/2388626_2381760_1339.jpg"></HostImage>

    </HostWrap>
   
     
    </>
  );
};

export default TitleBox;


const HostWrap = styled.div`
justify-content: space-between;
display: flex;
/* align-items: center; */
width: 640px;
margin-bottom: 10px;
`

const TextWho = styled.div`
 font-size: 22px;  
  font-weight: 600;
`;

const TextInfo = styled.div`
font-size: 16px;
margin:8px 0px;
`

const HostImage = styled.div`
margin: 58px 0px 0px 0px;

width: 56px;
height: 56px;
border-radius: 50px;
background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`


const TextWrap = styled.div`

float: left;
flex-direction: column;
text-align: left;
padding: 50px 16px 16px 0px;
`