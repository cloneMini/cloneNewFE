import styled from "styled-components"

function Addhost(){
    return(
        <>
        <div style={{width:'100vw', height:'100vh',display:'flex',float:'left'}}>
            <ScreenLeft></ScreenLeft>
            <ScreenRight>
                <InputBox>
                    <Textarea>당신의 숙소 이름을 정해보세요!</Textarea>
                    <Inputarea/>
                </InputBox>
                <InputBox>
                    <Textarea>숙소의 주소를 기입해임마</Textarea>
                    <Inputarea/>
                </InputBox>
                <InputBox>
                    <input style={{marginTop:'30px', height:'40px', width:'150px'}}
                        accept='image/*' type='file' multiple id='file'/>
                </InputBox>
                <InputBox>
                    <Textarea>얼마냐?</Textarea>
                    <Inputarea/>
                </InputBox>
                <InputBox>
                    <Select> 사아가 
                        <option>1인실</option>
                        <option>2인실</option>
                        <option>3인실</option>
                    </Select>
                    <Select>
                        <option>와이파이</option>
                        <option>와이파이 없음</option>
                        <option>와이파이 없음</option>
                    </Select>
                    <Select>
                        <option>주차공간</option>
                        <option>주차공간 있음</option>
                        <option>주차공간 없음</option>
                    </Select>
                    <Select>
                        <option>세탁시설</option>
                        <option>세탁기 있음</option>
                        <option>세탁기 없음</option>
                    </Select>
                </InputBox>
                <InputBox>
                    <Submit>호스팅 하기</Submit>
                </InputBox>
               
            </ScreenRight>
        </div>
        </>
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
    width:60%;
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
    width:15vw;
    height:40px;
    margin: 0 auto;
    font-size:16px;
    color:white;
    background:linear-gradient(to right, blue, pink);
    border:none;
    border-radius:15px;
`
export default Addhost