import styled from "styled-components";
import Room from '../component/Room';
import { useCallback, useEffect, useRef, useState } from "react";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import homeIcon from '../elements/home.png';
import Header from "../component/Header";
import { useDispatch, useSelector } from "react-redux";
import {actionCreators as postActions} from '../redux/modules/post';
import { useHistory } from "react-router-dom";

function ListPage(){
    const history = useHistory()
    const post_list = useSelector(state => state.post.list);
    console.log(post_list)

    const dispatch = useDispatch();
    const mapRef = useRef(null);
    const [getLot, setLot] = useState(false);
    const [getDry, setDry] = useState(false);
    const [getWfi, setWfi] = useState(false);
    const [getCnt, setCnt] = useState(0);
    const manCnt = useRef();
    const calculate = (data) => {
        let latitude = 0;
        let longitude = 0;
        for(let i = 0; i < data.length; i++){
            latitude += data[i].lat
            longitude += data[i].lng
        }
        latitude = latitude/data.length;
        longitude = longitude/data.length;
        return {latitude, longitude}
    }
    const initMap = useCallback(() => {
        
        const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: calculate(locations).latitude, lng: calculate(locations).longitude },
        zoom: 11,
        });
        const infoWindow = new window.google.maps.InfoWindow({
            content: "",
            disableAutoPan: true,
          });
        const labels = "BCDEFGHIJKLMNOPQRSTUVWXYZ";
        // 그 정보들을 배열로 받아와야 한다.
        const markers = locations.map((position, i) => {
            const label = labels[i % labels.length];
            // console.log(label)
            const myIcon = new window.google.maps.MarkerImage(homeIcon, null, null, null, new window.google.maps.Size(55,55));
            const marker = new window.google.maps.Marker({
              position,
              label,
              icon : myIcon,
            });
            marker.addListener("click", () => {
              infoWindow.setContent();
              infoWindow.open(map, marker);
            });
            return marker;
          }); 
        new MarkerClusterer({ markers, map });
    }, [mapRef]);
    // const locations = [
    //     { lat: 37.523234, lng: 127.034181 },
    //     { lat: 37.519111, lng: 127.035124 },
    //     { lat: 37.515988, lng: 127.039834 },
    //     { lat: 37.515702, lng: 127.029968 },
    //   ];
    let locations = [];
    post_list.forEach((e, i)=>{
        locations.push({lat : e.latitude, lng : e.longitude});
    })
    console.log(locations)
    useEffect(() => {
        dispatch(postActions.getPostDB(getLot, getDry, getWfi, getCnt));
        initMap();
      }, [getLot, getDry, getWfi, getCnt]); // getLot이 변ㅕ시마다 useEffect 작동

    const onChange = () => {
        setCnt(manCnt.current.value)
    }

    const Filter1 = styled.button`
    width:100px;
    height:40px;
    border:0.5px solid #d2d2d2;
    border-radius:25px;
    margin-right:20px;
    background:${getWfi == true ? '#eee' : 'white'};
    font-size:15px;
    &:hover{
        border: 1px solid black;
    }
    `
    const Filter2 = styled.button`
    width:100px;
    height:40px;
    border:0.5px solid #d2d2d2;
    border-radius:25px;
    margin-right:20px;
    background:${getLot == true ? '#eee' : 'white'};
    font-size:15px;
    &:hover{
        border: 1px solid black;
    }
`
const Filter3 = styled.button`
    width:100px;
    height:40px;
    border:0.5px solid #d2d2d2;
    border-radius:25px;
    margin-right:20px;
    background:${getDry == true ? '#eee' : 'white'};
    font-size:15px;
    &:hover{
        border: 1px solid black;
    }
`

    return(
        <>
        <Header/>
        <Upper>
           
            <Botbox>
                <Select onChange={onChange} ref={manCnt}>
                    <option>전체</option>
                    <option>1인실</option>
                    <option>2인실</option>
                    <option>3인실</option>
                </Select>
                <Filter1 getWfi={getWfi} onClick={()=>{setWfi(!getWfi)}}>무선 인터넷</Filter1>
                <Filter2 onClick={()=>{setLot(!getLot)}}>주차공간</Filter2>
                <Filter3 onClick={()=>{setDry(!getDry)}}>세탁기</Filter3>
            </Botbox>
        </Upper>
        <ListBox>
            <RoomList>
                {
                    post_list.map((element, idx) =>{
                        return <Room element={element} idx={idx}  onClick={()=>{
                            history.push('/detailpage/'+post_list[idx].postId)
                          
                        }} />
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
    height: 100%;
    background:white;
    border-bottom: 0.5px solid #d2d2d2;
`
const Botbox = styled.div`
    width:100vw;
    height:60%;
    text-align:left;
    padding-top: 5px;
    padding-left: 40px;
    margin-bottom:15px;
`
const ListBox = styled.div`
    width: 100vw;
    height: 100%;
    background:white;
    display: flex;
    float:left;
`
const RoomList = styled.div`
    width: 44vw;
    height: 87vh;
    padding-top : 10px;
    overflow:scroll;
    z-index:5;
    @media screen and (max-width: 1300px) {
        width:100%;
    }
    
`
const Mapbox = styled.div`
    width: 56vw;
    height: 88vh;
    background:#eee;
    right:20;
    @media screen and (max-width: 1300px) {
        display : none;
    }
`


const Select = styled.select`
    width:100px;
    height:40px;
    border:0.5px solid #d2d2d2;
    border-radius:25px;
    margin-right:20px;
    background:white;
    font-size:15px;
    padding-left:1.4%;
    &:hover{
        border: 1px solid black;
    }
`

export default ListPage

