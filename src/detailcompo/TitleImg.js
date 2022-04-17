import React from "react";
import styled from "styled-components";

const TitleImg = (props) => {
  return (
    <>
      <ImgBox>
        <BigImg src="https://www.nordicnest.kr/assets/contentful/p7vzp7ftmsr1/57B4dlNjouxoa4rzthZu3d/90c61efb2cf549b330dbef61d35f9ea3/36655-02-04.jpg?preset=tiny&dpr=2"></BigImg>
        <PieceBox>
          <PieceImg src="https://www.nordicnest.kr/assets/contentful/p7vzp7ftmsr1/4NCLDIsHvQm3BFsjo8fJPZ/007f06ed3fbd43eeb33c0204921ccac1/04-0835.jpg?preset=tiny&dpr=2"></PieceImg>
          <PieceBoxBot>
            <PieceImg src="https://mblogthumb-phinf.pstatic.net/MjAyMDEyMThfMTcg/MDAxNjA4Mjk5NjIwMDc4.3VIw_mXHUy3qg68fUlZCdMBbeZjI3ZcrNlVpW7giumYg.TXJIy3LBDoC0dABi4eIbZCynFPmTqaVZsxvSOSQrQDcg.JPEG.designpress2016/Pent-Haus_Home_Collection.jpg?type=w800"></PieceImg>
          </PieceBoxBot>
        </PieceBox>
        <PieceBox >
          <PieceImgR src="https://m.younggagu.com/web/product/big/202104/28039b9cb97f7cdfe778ee7783b79b4b.jpg"></PieceImgR>
          <PieceBoxBot>
            <PieceImgRd src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDK095xKxVlxJxrBSdS220ZSAFAt3ksuMfQ1U6E3NUEhVAX3ttu2XFhqsBDjL9GlIXr20&usqp=CAU"
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