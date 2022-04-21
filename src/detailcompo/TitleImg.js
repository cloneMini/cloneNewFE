import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const TitleImg = (props) => {
  const post = useSelector(state => state.comment.list.post[0])


if(!post)return
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
  @media screen and (max-width: 1016px) {
    width:100%;
    height:10%;
    flex-wrap:unset;
  }
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
  &:hover{
  cursor: pointer;
  filter: brightness(90%);
}
@media screen and (max-width: 1016px) {
  border-radius:20px;
  width:100%;
}
`;

const PieceImg = styled.div`
  width: 272px;
  height: 225px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &:hover{
  cursor: pointer;
  filter: brightness(90%);
  }
  @media screen and (max-width: 1016px) {
    display:none;
  }
`;

const PieceImgR = styled.div`
  max-width: 272px;
  height: 225px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0px 20px 0px 0px;
  &:hover{
  cursor: pointer;
  filter: brightness(90%);
  @media screen and (max-width: 1296px) {
    display:none;
  }
}
`;

const PieceImgRd = styled.div`
  width: 272px;
  height: 225px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0px 0px 20px 0px;
  &:hover{
  cursor: pointer;
  filter: brightness(90%);
}
@media screen and (max-width: 1296px) {
  display:none;
}
`;


//다음부턴 뒤져도 image elements 활용해보자... 