import styled from "styled-components";

function Room(props){
    const post = props.element;
    console.log(props)
    return(
        <>
        <Rooms onClick={props.onClick}>
            <Imgbox>
                <Imgset  
                src={post.postImg[0]}/>
            </Imgbox>
            <Contentbox>
                <Textbox>
                    <p>{post.address}</p>
                </Textbox>
                <Textbox>
                    <p>{post.postDesc}</p>
                </Textbox>
                <Textbox>
                    <p>{post.category.join(' ')}</p>
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
    @media screen and (max-width: 1300px) {
        width:100%;
    }
    @media screen and (max-width: 650px) {
        width:100%;
        height:57%;
        float:none;
        display:flex;
        flex-direction:column;
    }
`
const Imgbox = styled.div`
    width: 35%;
    height: 100%;
    z-index: 5;
    @media screen and (max-width: 650px) {
        width:100%;
    }
`
const Imgset = styled.img`
    width:100%;
    height:100%;
    border-radius:20px;
    @media screen and (max-width: 1300px) {
        width:80%;
        margin-left:0%;
    }
    @media screen and (max-width: 650px) {
        width:95%;
        margin-left:0%;
    }
    
`
const Contentbox = styled.div`
    width: 65%;
    height: 90%;
    padding:10px;
    z-index: 5;
    @media screen and (max-width: 1300px) {
        margin-left:-5%;
    }
    @media screen and (max-width: 650px) {
        width:100%;
        margin-left:2%;
    }
`
const Textbox = styled.div`
    width:100%;
    height:30px;
    margin: 5px 0px 5px 0px;
    text-align:left;
`
export default Room