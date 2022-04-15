import React from "react";
import styled from "styled-components";
import logo from '../image/logo.png'
import search from '../image/search.png'
import mine from '../image/mine.png'

const Header = () => {
    return (
        <div width='100%' max-width='1500px'>
            <HeadDiv>
                <img src={logo} width='118px' />
                <SearchBtn>
                    검색 시작하기
                    <SearchIcon src={search} />
                </SearchBtn>
                <HeadDiv>
                    <PostWriteBtn>게시물 작성</PostWriteBtn>
                    <MyPageBtn src={mine} />
                </HeadDiv>
            </HeadDiv>
        </div>
    )
}

const HeadDiv = styled.div`
height:80px;
padding:0px 80px;
display:flex; 
justify-content:space-between;
align-items:center !important;
border-bottom:solid 0.2px gray;
`

const SearchBtn = styled.div`
appearance:none;
backgrond-color:#ffffff;
border:1px solid transparent;
box-shadox:1px 1px 1px 1px gray;
display:flex;
font-family:inherit;
font-size:inherit;
font-weight:inherit;
height:48px;
width:300px;
margin:-1px;
text-decoration:none;
align-items:center;
min-width:0px;
position:relative;
padding-left:8px;
border-top-left-radius: 24px;
border-bottom-left-radius:24px;
border-top-right-radius:24px;
border-bottom-right-radius:24px;
`
const SearchDiv = styled.div`

`

const SearchIcon = styled.img`
width:32px;
`

const PostWriteBtn = styled.button`
width:93.54px;
height:42px;
border-radius:21px;
border:none;
background:transparent;
left:-3px;
right:-3px;
text-align:center;
align-items:center;
padding:0px;
margin:0px;
:hover{
    background:#f7f7f7;
}
`

const MyPageBtn = styled.img`
width:77px;
`


export default Header;