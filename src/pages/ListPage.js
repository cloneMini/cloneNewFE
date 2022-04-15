import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import {actionCreators as postActions} from '../redux/modules/post';

function ListPage(){
    const dispatch = useDispatch();
    
    return(
        <Background>
            
        </Background>
    )
}

const Background = styled.div`
    width: 100px;
    height: 100px;
    background:#eee;
`

export default ListPage

