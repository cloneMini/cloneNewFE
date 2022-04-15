import styled from "styled-components";
import Room from '../component/Room';
import {Maps} from 'google-map-react';
import { useCallback, useEffect, useRef } from "react";

function ListPage(){
    const array = [1,2,3,4,5]
    const mapRef = useRef(null);

    const initMap = useCallback(() => {
        new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.497, lng: 127.004 },
        zoom: 14,
        });
    }, [mapRef]);

    useEffect(() => {
        initMap();
      }, [initMap]);

    return(
        <>
        <Upper />
        <ListBox>
            <RoomList>
                {
                    Array.from({length:5},e =>{
                        return <Room/>
                    })
                }
            </RoomList>
            <Mapbox>
                <div  style={{width:'100%', height:'100%'}} ref={mapRef}></div>
            </Mapbox>
        </ListBox>
        </>
    )
}

const Upper = styled.div`
    width: 100vw;
    height: 13vh;
    background:white;
    border-bottom: 0.5px solid #d2d2d2;
`
const ListBox = styled.div`
    width: 100vw;
    height: 100%;
    background:white;
    display: flex;
    float:left;
`
const RoomList = styled.div`
    width: 43vw;
    height: 87vh;
    padding-top : 10px;
    overflow:scroll;
    z-index:5;
`
const Mapbox = styled.div`
    width: 57vw;
    height: 88vh;
    background:#eee;
    right:20;
    
`

export default ListPage

