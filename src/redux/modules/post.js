import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import Geocode from 'react-geocode';
import axios from "axios";
import { getCookie } from '../../shared/Cookie';

const SET_POST = "SET_POST";
const GET_POST = 'GET_POST';
const GET_MAP = 'GET_MAP'

const setPost = createAction(SET_POST, (post) => ({post}));
const getPost = createAction(GET_POST, (post_list) => ({post_list}));
const getMap = createAction(GET_MAP, (loc, title, center) => ({loc, title, center}));

const initialState = {
  list: [],
  loc : [],
  title : [],
  center : [],
}
  
const addPostDB = (data, fileInput) => {
   let token = getCookie("ok")
       return async function(dispatch, getState){
      let lati = 0;
      let long = 0;
      console.log(token)

      await Geocode.fromAddress(data.address).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          lati = lat;
          long = lng
        })
        .catch(error => {
          console.log(error);
        }
      );
      const formData = new FormData();
        if(fileInput.current){
          if(fileInput.current.files.length !== 5){
            alert('사진을 다섯개 올려주세요!')
          } else {
            for(let i = 0; i < fileInput.current.files.length; i++){
              formData.append('postImg', fileInput.current.files[i])
            }
            formData.append('postTitle', data.roomName)
            formData.append('postDesc', data.desc)
            formData.append('postCharge', data.price)
            formData.append('address', data.address)
            formData.append('room', data.manCnt)
            formData.append('wifi', data.wifi)
            formData.append('laundry', data.laundry)
            formData.append('parkinglot', data.parking)
            formData.append('latitude', lati)
            formData.append('longitude', long)
            for (var pair of formData.entries()){
                console.log(pair);
             }
            }
          }
      await axios({
        method : 'post',
        url : 'http://52.78.211.107/api/hostAdd',
        data : formData,
        headers : {
          Authorization : `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
            },
        })
          .then(response=>{
            console.log(response)
        })
          .catch(error =>{
            console.log(error)
        })
    }
  }


  export default handleActions(
    {
      [SET_POST]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.post;
      }),
      [GET_POST] : (state, action) => produce(state,(draft) => {
        draft.list = action.payload.post_list;
      }),
      [GET_MAP] : (state, action) => produce(state, (draft)=> {
        draft.loc = action.payload.loc;
        draft.title = action.payload.title;
        draft.center = action.payload.center;
      }),
    }, initialState
  );
  
  const actionCreators = {
    setPost,
    addPostDB,
    getPost,
  }
  
  export {actionCreators};