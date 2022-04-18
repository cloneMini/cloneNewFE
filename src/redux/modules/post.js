import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import Geocode from 'react-geocode';
import axios from "axios";

const SET_POST = "SET_POST";
const GET_POST = 'GET_POST'

const setPost = createAction(SET_POST, (post) => ({post}));
const getPost = createAction(GET_POST, (post_list) => ({post_list}));

const initialState = {
    list: [],
  }
  
const addPostDB = (data, fileInput) => {
    return async function(dispatch, getState){
      let lati = 0;
      let long = 0;

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
            // formData.append('latitude', lati)
            // formData.append('longtitue', long)
            for (var pair of formData.entries()){
                console.log(pair);
             }
            }
          }
      axios({
        method : 'post',
        url : 'http://3.38.178.66/api/hostAdd',
        data : formData,
        // headers : {
        //   Authorization : `Bearer${token}`,
        //   'Content-Type': 'multipart/form-data',
        //     },
        })
          .then(response=>{
            console.log(response)
        })
          .catch(error =>{
            console.log(error)
        })
      
        // dispatch(setPost(data1, data2))
    }
  }

  const getPostDB = (getLot, getDry, getWfi) => {
    return async function(dispatch){
      axios({
        method : 'get',
        url : 'http://3.38.178.66/api/listPage',
      })
      .then(response => {
        let post = response.data.post;
        let something = [];
          if(getLot) something = post.filter(post => post.category.includes('주차공간 있음'))
          if(getDry) something = post.filter(post => post.category.includes('세탁기 있음'))
          if(getWfi) something = post.filter(post => post.category.includes('와이파이 있음'))
        if(something.length > 0){
          dispatch(getPost(something))
        } else {
          dispatch(getPost(response.data.post))
        }
        
      })
      .catch(error => {
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
      })
    }, initialState
  );
  
  const actionCreators = {
    setPost,
    addPostDB,
    getPost,
    getPostDB,
  }
  
  export {actionCreators};