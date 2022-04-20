import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";
import { useSelector } from "react-redux";
function KakaoMap(props) {
   const location = useSelector(state => state.comment.list.post[0])

  return (
    <>
      <div>
        <Title>호스팅 지역</Title>
        <Location>{props.address}</Location>
        <Map
          center={{ lat: location.latitude, lng: location.longitude }}
          style={{ width: "100%", height: "480px" }}
          level={3}
        >
          <MapMarker position={{ lat: location.latitude, lng: location.longitude }}></MapMarker>
        </Map>
      </div>
    </>
  );
}

export default KakaoMap;

const Title = styled.div`
  font-size: 22px;
  margin: 0px;
  font-weight: 600;
  padding-bottom: 24px;
  color: #222222;
`;

const Location = styled.div`
  margin-bottom: 24px;
  color: #222222;
`;
