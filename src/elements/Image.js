import React from "react";
import styled from "styled-components";

function Image(props) {
  const { shape, src, size } = props;

  const styles = {
    src: src,
    size: size,
  };

  if (shape === "BigOne") {
    return <Bigimg {...styles}></Bigimg>;
  }
  if (shape === "Piece") {
    return <PieceImg{...styles}></PieceImg>
    
  }
  return <>
  <ImageDefault {...styles}></ImageDefault></>;
}

Image.defaultProps = {
  shape: "circle",
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZnGglDgWN7s10nWdMiZ5gfnoJqqRe49v7Og&usqp=CAU",
  size: 36,
};

const PieceImg = styled.div`
  position: relative;
  overflow: hidden;
  background-image: src("${(props) => props.src}");
  background-size: cover;
  max-width: 230px;
  min-width: 225px;
`;

const Bigimg = styled.div`
  max-width: 480px;
  max-height: 450px;
  background-image: src("${(props) => props.src}");
  background-size: cover;
`;

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: src("${(props) => props.src}");
  background-size: cover;
`;


export default Image;
