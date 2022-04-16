import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Geocode from 'react-geocode';
import { useDispatch } from "react-redux";
import {actionCreators as postActions} from '../redux/modules/post'

function Addhost(){
    // Geocode.setApiKey('AIzaSyCELxXggIezYq8kQ1FNW1zQwTjy6YSR-L4');
    // Geocode.setLanguage('ko');
    // Geocode.setRegion('kr');
    // Geocode.enableDebug();
    const dispatch = useDispatch();
    const [getInputs, setInputs] = useState({
        roomName : '', address : '',
        desc : '', price : '',
        manCnt : '', wifi : '',
        parking : '', laundry : '',
    });
    const fileInput = useRef(null);

    const checked = (data) => {
        let array = [roomName, address, desc, price, manCnt, wifi, parking]
        for(let i = 0; i < array.length; i++){
            if(array[i] == ''){
                alert('내용을 입력해주세요!')
                break;
            } else {
                if(array[array.length-1]){
                    if(array[array.length-1] !== ''){
                        return true;
                    }
                }
            }
        }
    }

    const {roomName, address, desc, price, manCnt, wifi, parking, laundry} = getInputs;
    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...getInputs,
            [name] : value
        })
    }
    const submit = () => {
        if(checked(getInputs) == true){
            dispatch(postActions.addPostDB(getInputs, fileInput))
        } 
    }


    return(
        <div style={{width:'100vw', height:'100vh',display:'flex',float:'left'}}>
            <ScreenLeft></ScreenLeft>
            <ScreenRight>
                <InputBox>
                    <Textarea >당신의 숙소 이름을 정해보세요!</Textarea>
                    <Inputarea name='roomName' value={roomName} onChange={onChange}/>
                </InputBox>
                <InputBox>
                    <Textarea>숙소의 주소를 기입해임마</Textarea>
                    <Inputarea name='address' value={address} onChange={onChange}/>
                </InputBox>
                <InputBox>
                    <input style={{marginTop:'30px', height:'40px', width:'150px'}}
                        accept='image/*' type='file' ref={fileInput} multiple id='file'/>
                </InputBox>
                <InputBox>
                    <Textarea>얼마냐?</Textarea>
                    <Inputarea name='price' value={price} onChange={onChange}/>
                </InputBox>
                <InputBox>
                    <Textarea>숙소의 소개</Textarea>
                    <Inputarea name='desc' value={desc} onChange={onChange}/>
                </InputBox>
                <InputBox>
                    <Select name='manCnt' value={manCnt} onChange={onChange}>
                        <option>1인실</option>
                        <option>2인실</option>
                        <option>3인실</option>
                    </Select>
                    <Select name='wifi' value={wifi} onChange={onChange}>
                        <option>와이파이</option>
                        <option>와이파이 없음</option>
                        <option>와이파이 없음</option>
                    </Select>
                    <Select name='parking' value={parking} onChange={onChange}>
                        <option>주차공간</option>
                        <option>주차공간 있음</option>
                        <option>주차공간 없음</option>
                    </Select>
                    <Select name='laundry' value={laundry} onChange={onChange}>
                        <option>세탁시설</option>
                        <option>세탁기 있음</option>
                        <option>세탁기 없음</option>
                    </Select>
                </InputBox>
                <InputBox>
                    <Submit onClick={()=>{submit()}}>호스팅 하기</Submit>
                </InputBox>
               
            </ScreenRight>
        </div>
    )
}
const ScreenLeft = styled.div`
    width:50vw;
    height:100vh;
    background:linear-gradient(to right, blue, pink);
`
const ScreenRight = styled.div`
    width:50vw;
    height:100vh;
    background:white;
    padding-top:100px;
`
const InputBox = styled.div`
    width:80%;
    height:100px;
    margin : 0 auto;
    text-align:left;
`
const Textarea = styled.p`
    font-size:20px;
    margin-bottom:5px;
`
const Inputarea = styled.input`
    width: 80%;
    height: 40px;
    border-radius:10px;
    border: 1.5px solid #d2d2d2;
`
const Select = styled.select`
    width:130px;
    height:40px;
    font-size:15px;
    border:none;
    border-radius:20px;
    text-align:center;
    margin:20px 30px 0 0;
`
const Submit = styled.button`
    width:300px;
    height:40px;
    margin: 0 auto;
    margin-top : 50px;
    font-size:16px;
    color:white;
    background:linear-gradient(to right, blue, pink);
    border:none;
    border-radius:15px;
`
export default Addhost