import React from "react";
import styled from "styled-components";
import logo from '../image/logo.png'
import search from '../image/search.png'
import mine from '../image/mine.png'
const Header = () => {
    return (
            <HeadDiv>
               <div>
                <img src={logo} width='118px' />
               </div>
                <SearchBtn>
                   <SearchTxt>검색 시작하기</SearchTxt>
                    <SearchIcon src={search}  />
                </SearchBtn>
                <LeftDiv>
                    <PostWriteBtn>게시물 작성</PostWriteBtn>
                    <MyPageBtn src={mine} />
                </LeftDiv>
            </HeadDiv>
    )
}
const HeadDiv = styled.div`
width:100%;
height:80px;
display:flex;
justify-content:space-between;
align-items:center !important;
border-bottom:solid 0.2px #EEEEEE;
/* position:fixed; */
background:#ffffff !important;
`
const SearchBtn = styled.div`
background-color:#ffffff;
display:flex;
height:48px;
width:300px;
margin:-1px;
text-decoration:none;
align-items:center;
min-width:0px;
padding: 0px 4px;
display: flex;
justify-content: space-between;
position:relative;
border: 1px solid #EDEDED;
padding-left:8px;
border-radius: 24px;
box-sizing:border-box;
box-shadow:1px 2px 3px 0px rgb(239, 239, 239);
cursor: pointer;
&:hover{
    box-shadow:3px 3px 4px 1px rgb(239, 239, 239);
}
`
const SearchDiv = styled.div`
`
const SearchIcon = styled.img`
width:40px;
`
const LeftDiv = styled.div`
height:80px;
display:flex;
align-items:center !important;
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
const SearchTxt = styled.div`
padding-left: 15px;
font-size: 14px;
font-weight: 600;
`
const Center  = styled.div`
width: 1180px;
`
export default Header;