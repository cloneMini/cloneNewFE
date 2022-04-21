import styled from "styled-components";
import Room from '../component/Room';
import { useEffect, useRef, useState } from "react";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import homeIcon from '../elements/houseticon.png';
import Header from "../component/Header";
import { useHistory } from "react-router-dom";
import axios from "axios";

function ListPage(){
    const history = useHistory();
    const mapRef = useRef(null);
    const [getPost, setPost] = useState([]);
    const [getLot, setLot] = useState(false);
    const [getDry, setDry] = useState(false);
    const [getWfi, setWfi] = useState(false);
    const [getCnt, setCnt] = useState(0);
    const manCnt = useRef();
   
    const initMap = (loc, title, center) => {
        const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: center.latitude, lng: center.longitude },
        zoom: 9,
        });
        const infoWindow = new window.google.maps.InfoWindow({
            content: "",
            disableAutoPan: true,
          });
        const markers = loc.map((position, i) => {
            const titles = title[i]
            const myIcon = new window.google.maps.MarkerImage(homeIcon, null, null, null, new window.google.maps.Size(55,55));
            const marker = new window.google.maps.Marker({
              position,
              titles,
              icon : myIcon,
            });
            marker.addListener("click", () => {
              infoWindow.setContent(titles);
              infoWindow.open(map, marker);
            });
            return marker;
          }); 
        new MarkerClusterer({ markers, map });
    };
    // useEffect 에서 axios 걸기.
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://52.78.211.107/api/listPage',
            })
            .then(response => {
                const post = response.data.post
                let people = manCnt.current.value
                let something = [];
                if (people == '1인실') something = post.filter(post => post.room == '1인실')
                if (people == '2인실') something = post.filter(post => post.room == '2인실')
                if (people == '3인실') something = post.filter(post => post.room == '3인실')
                if (getLot) something = post.filter(post => post.parkinglot == '주차공간 있음')
                if (getDry) something = post.filter(post => post.laundry == '세탁기 있음')
                if (getWfi) something = post.filter(post => post.wifi == '와이파이 있음')
                if (something.length > 0) {
                    let locations = [];
                    for(let i = 0; i < something.length; i++){
                        locations.push({ lat: something[i].latitude, lng: something[i].longitude });
                    }
                    let titleArray = [];
                    for(let i = 0; i < something.length; i++){
                        titleArray.push(something[i].postTitle);
                    }
                    const calculate = (data) => {
                            let latitude = 0;
                            let longitude = 0;
                            for (let i = 0; i < data.length; i++) {
                                latitude += data[i].lat
                                longitude += data[i].lng
                            }
                            latitude = latitude / data.length;
                            longitude = longitude / data.length;
                            return { latitude, longitude }
                        }
                    setPost(something);
                    initMap(locations, titleArray, calculate(locations));
                } else {
                    let locations = [];
                    post.forEach((e, i) => {
                        locations.push({ lat: e.latitude, lng: e.longitude });
                    })
                    let titleArray = [];
                    post.forEach(e => {
                        titleArray.push(e.postTitle)
                    })
                    const calculate = (data) => {
                        let latitude = 0;
                        let longitude = 0;
                        for (let i = 0; i < data.length; i++) {
                            latitude += data[i].lat
                            longitude += data[i].lng
                        }
                        latitude = latitude / data.length;
                        longitude = longitude / data.length;
                        return { latitude, longitude }
                    }
                    setPost(post)
                    initMap(locations, titleArray, calculate(locations));
                }
            })
            .catch(error => {
                console.log(error)
            })
      }, [getLot, getDry, getWfi, getCnt]); // getLot이 변ㅕ시마다 useEffect 작동
    const onChange = () => {
        setCnt(manCnt.current.value)
    }

    const Filter1 = styled.button`
    width:100px; height:40px;
    border:0.5px solid #d2d2d2;
    border-radius:25px; margin-right:20px;
    background:${getWfi == true ? '#eee' : 'white'};
    font-size:15px;
    &:hover{border: 1px solid black;}
`
    const Filter2 = styled.button`
    width:100px;height:40px;
    border:0.5px solid #d2d2d2;
    border-radius:25px;margin-right:20px;
    background:${getLot == true ? '#eee' : 'white'};
    font-size:15px;
    &:hover{ border: 1px solid black;}
`
const Filter3 = styled.button`
    width:100px;height:40px;
    border:0.5px solid #d2d2d2;
    border-radius:25px;margin-right:20px;
    background:${getDry == true ? '#eee' : 'white'};
    font-size:15px;
    &:hover{ border: 1px solid black;}
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
                    getPost.map((element, idx) =>{
                        return <Room key={element.postId} element={element} idx={idx}  onClick={()=>{
                            history.push(`/detailpage/${element.postId}`)
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
    @media screen and (max-width: 650px) {
        width:100%;
        height:100%;
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
    margin-left:-10px;
    background:white;
    font-size:15px;
    padding-left:30px;
    &:hover{
        border: 1px solid black;
    }
`
export default ListPage

