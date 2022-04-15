import styled from "styled-components";

function Room(){
    return(
        <>
        <Rooms>
            <Imgbox>
                <img style={{width:'100%', height:'100%', borderRadius:'20px'}} 
                src='https://a0.muscache.com/im/pictures/a1728fbe-c28d-4040-8a5b-dc69f69afb38.jpg?im_w=720'/>
            </Imgbox>
            <Contentbox>
                <Textbox>
                    <p>서울특별시 마포구 공덕동</p>
                </Textbox>
                <Textbox>
                    <p>논현동 포근하고 깔끔한 작은방 여성전용 개인실</p>
                </Textbox>
                <Textbox>
                    <p>방 1개, 무선인터넷 있음, 세탁기 있음, 주차공간 있음</p>
                </Textbox>
                <Textbox></Textbox>
            </Contentbox>
        </Rooms>
        </>
    )
}

const Rooms = styled.div`
    margin: 10px auto 10px auto;
    width:41.5vw;
    height:210px;
    background:white;
    border-top: 0.5px solid #d2d2d2;
    padding:20px 10px 5px 15px;
    display: flex;
    float: left;
    z-index: 5;
`
const Imgbox = styled.div`
    width: 35%;
    height: 100%;
    z-index: 5;
`
const Contentbox = styled.div`
    width: 65%;
    height: 90%;
    padding:10px;
    z-index: 5;
`
const Textbox = styled.div`
    width:100%;
    height:30px;
    margin: 5px 0px 5px 0px;
    text-align:left;
`
export default Room