import React from "react";
import styled from "styled-components";
import Image from "../elements/Image";

const TitleImg = (props) => {
  return (
    <>
      <ImgBox>
        <img
          // shape="BigOne"
          src="https://www.nordicnest.kr/assets/contentful/p7vzp7ftmsr1/57B4dlNjouxoa4rzthZu3d/90c61efb2cf549b330dbef61d35f9ea3/36655-02-04.jpg?preset=tiny&dpr=2"
        ></img>
        <PieceBox>
          <Image shape="Piece"></Image>
          <PieceBoxBot>
            <Image shape="Piece"></Image>
          </PieceBoxBot>
        </PieceBox>
        <PieceBox>
          <Image shape="Piece"></Image>
          <PieceBoxBot>
            <Image shape="Piece"></Image>
          </PieceBoxBot>
        </PieceBox>
      </ImgBox>
    </>
  );
};

export default TitleImg;

const ImgBox = styled.div`
  padding-top: 24px;
  border-radius: 10px;
`;

const PieceBox = styled.div`
  padding-left: 8px;
`;
const PieceBoxBot = styled.div`
  padding-top: 8px;
`;
