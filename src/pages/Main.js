import React from "react";
import styled from "styled-components";
import MainHeader from "../component/MainHeader";
import Footer from '../component/Footer';
import {
  curious,
  seoul,
  daegu,
  daejun,
  ulsan,
  exotic,
  dynamic,
  background,
} from "../image/index";

const Main = (props) => {
  return (
    <>
      <MainHeader />
      <Box2>
        <PinkBox>
          <Text0>
            10만 명에 달하는 우크라이나 피란민에게 임시 숙소를 제공해주세요
          </Text0>
          <PinkBtn>자세히 알아보기</PinkBtn>
        </PinkBox>
      </Box2>
      <Box3>
        <Image1 src={curious} />
        <Image1Div>
          <CuriousDorm>호기심을 자극하는 숙소로 떠나보세요</CuriousDorm>
          <FlexBtn>유연한 검색</FlexBtn>
        </Image1Div>
      </Box3>
      <Box4>
        <Excting>설레는 다음 여행을 위한 아이디어</Excting>
      </Box4>
      <Box5>
        <CityBox>
          <CityNameBox src={seoul} />
          <CityName color="#D93B30">
            <City>서울</City>
            <Distance>331km 거리</Distance>
          </CityName>
        </CityBox>
        <CityBox>
          <CityNameBox src={daegu} />
          <CityName color="#CC2D4A">
            <City>대구</City>
            <Distance>95km 거리</Distance>
          </CityName>
        </CityBox>
        <CityBox>
          <CityNameBox src={daejun} />
          <CityName color="#D70466">
            <City>울산</City>
            <Distance>55km 거리</Distance>
          </CityName>
        </CityBox>
        <CityBox>
          <CityNameBox src={ulsan} />
          <CityName color="#FF385C">
            <City>대전</City>
            <Distance>204km 거리</Distance>
          </CityName>
        </CityBox>
      </Box5>
      <Excting>에어비앤비 체험 둘러보기</Excting>
      <Box6>
        <StreetDiv>
          <Image2 src={exotic} />
          <EnjoyableDiv>
            <ExperienceTxt>
              여행 중 만나는
              <br /> 이색적인 즐길거리
            </ExperienceTxt>
            <ExperienceBtn>체험</ExperienceBtn>
          </EnjoyableDiv>
        </StreetDiv>
        <StreetDiv>
          <Image2 src={dynamic} />
          <EnjoyableDiv>
            <ExperienceTxt>
              집에서 만나는
              <br /> 다양한 즐길 거리
            </ExperienceTxt>
            <ExperienceBtn>온라인 체험</ExperienceBtn>
          </EnjoyableDiv>
        </StreetDiv>
      </Box6>
      <Box7>
        <Image1 src={background} />
        <HostingDiv>
          <Hosting>호스팅에 관해<br /> 궁금하신 점이<br /> 있나요?</Hosting>
        <SuperHost>슈퍼호스트에게 물어보세요</SuperHost>
        </HostingDiv>
      </Box7>
      <Footer />
    </>
  );
};

const Box2 = styled.div`
  background-color: black;
  margin: auto;
  padding: 20px 0;
`;
const PinkBox = styled.div`
  width: 90vw;
  height: 42vh;
  margin: 10vh;
  background-color: #ff385c;
  display: grid;
  border-radius: 10px;
`;
const Text0 = styled.div`
  font-size: 50px;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  margin: auto 14vw;
`;

const PinkBtn = styled.button`
  background-color: transparent;
  width: 120px;
  height: 40px;
  margin: 10px auto;
  font-size: 16px;
  font-weight: 500;
  color: white;
  border: 1px white solid;
  border-radius: 5px;
`;

const Box3 = styled.div`
  background-color: linear-gradient(90deg, black 50%, white 50%);
  width: 100vw;
  height: 100vh;
  margin: auto;
  position: relative;
  margin-bottom: 5vh;
`;

const CuriousDorm = styled.div`
  font-size: 6vh;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const FlexBtn = styled.button`
  background-color: #ffffff;
  color: linear-gradient(90deg, #6f019c 0%, #c6017e 135.12%);
  border: none;
  font-size: 20px;
  font-weight: 600;
  left: 45%;
  top: 70%;
  position: absolute;
  width: 150px;
  height: 60px;
  border-radius: 30px;
`;

const Image1 = styled.img`
  width: 90vw;
  border-radius: 10px;
  vertical-align: middle;
  position: absolute;
  margin: 0 10vh;
`;
const Image1Div = styled.div`
  width: 90vw;
  border-radius: 10px;
`;

const Box4 = styled.div`
  background: white;
  margin: auto;
  width: 100%;
  height: 10vh;
`;
const Excting = styled.div`
  display: inline-block;
  justify-content: space-between;
  width: 90vw;
  height: 8vh;
  font-size: 5vh;
  font-weight: 600;
  text-align: left;
  margin: 4vh 10vh;
`;
const Box5 = styled.div`
  margin: 0vh 4.5vw 0 4.5vw;
  background-color: white;
  display: flex;
`;

const CityBox = styled.div`
  dixplay: flex;
  margin: 1.9vh;
`;

const CityNameBox = styled.img`
  width: 21vw;
  height: 30vh;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;
const CityName = styled.div`
  width: 21vw;
  height: 22vh;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background: ${props=>props.color};
  margin-top: -5px;
`;

const City = styled.div`
  font-size: 24px;
  color: #ffffff;
  font-weight: 600;
  text-align: left;
  padding: 15px;
`;

const Distance = styled.div`
  font-size: 16px;
  color: #ffffff;
  font-weight: 300;
  text-align: left;
  padding: 0 0 0 15px;
`;

const Box6 = styled.div`
  margin: 0 4.5vw;
  display: flex;
`;

const StreetDiv = styled.div`
  margin: 0 1.5vw 0 0;
`;

const Image2 = styled.img`
  width: 44.5vw;
  border-radius: 10px;
`;
const EnjoyableDiv = styled.div`
  width: 45vw;
`;
const ExperienceTxt = styled.div`
  font-size: 6vh;
  font-weight: 600;
  color: #ffffff;
  position: relative;
  top: 0%;
  left: 40%;
  bottom: 80vh;
  transform: translate(-50%, -100%);
  margin: 4vw 4vw -32vw 4vw;
  text-align: left;
`;
const ExperienceBtn = styled.button`
  color: #000000;
  background: #ffffff;
  border: none;
  width: 10vw;
  height: 5vh;
  text-align: center;
  position: relative;
  top: 0%;
  left: 10%;
  bottom: 35vh;
  transform: translate(-50%, -90%);
  margin: 6vw 4vw;
  border-radius: 10px;
  font-size: 1.01rem;
  font-weight: 500;
`;

const Box7 = styled.div`
height:inherit;
`
const HostingDiv = styled.div`
width: 90vw;
  border-radius: 10px;
  vertical-align: middle;
  position: relative;
  margin: 0 10vh;
`

const Hosting = styled.div`
font-size: 9vh;
  font-weight: 600;
  color: #ffffff;
  text-align: left;
  position:relative;
  margin:0 10vh;
  padding:5vh 0;
`

const SuperHost = styled.div`
color: #000000;
font-weight:600;
  background: #ffffff;
  border: none;
  width: 10vw;
  height: 5vh;
  text-align: center;
  border-radius: 10px;
  font-size: 1.01rem;
  margin:35vh 0vh 10vh 10vh;
  line-height:5vh;
`
export default Main;
