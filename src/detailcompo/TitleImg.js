import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const TitleImg = (props) => {
  const post = useSelector(state => state.comment.list.post[0])

console.log(post.postImg)

  return (
    <>
      <ImgBox>
        <BigImg src={post.postImg[0]}></BigImg>
        <PieceBox>
          <PieceImg src={post.postImg[1]}></PieceImg>
          <PieceBoxBot>
            <PieceImg src={post.postImg[2]}></PieceImg>
          </PieceBoxBot>
        </PieceBox>
        <PieceBox >
          <PieceImgR src={post.postImg[3]}></PieceImgR>
          <PieceBoxBot>
            <PieceImgRd src={post.postImg[4]}
            ></PieceImgRd>
          </PieceBoxBot>
        </PieceBox>
      </ImgBox>
    </>
  );
};

export default TitleImg;

const ImgBox = styled.div`
  padding-top: 16px ;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  justify-content: center;
`;

const PieceBox = styled.div`
  padding-left: 8px;
`;

const PieceBoxBot = styled.div`
  padding-top: 8px;
`;

const BigImg = styled.div`
  width: 560px;
  height: 458px;
  border-radius: 20px 0px 0px 20px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
`;

const PieceImg = styled.div`
  width: 272px;
  height: 225px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const PieceImgR = styled.div`
  max-width: 272px;
  height: 225px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0px 20px 0px 0px;
`;

const PieceImgRd = styled.div`
  width: 272px;
  height: 225px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0px 0px 20px 0px;
`;


//다음부턴 뒤져도 image elements 활용해보자... 