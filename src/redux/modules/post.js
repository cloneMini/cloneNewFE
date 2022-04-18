import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import Geocode from 'react-geocode';

const SET_POST = "SET_POST";

const setPost = createAction(SET_POST, (post_list) => ({post_list}));

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
            for(let i = 0; i < fileInput.current.files.length; i++){
                formData.append(`postImg${i+1}`, fileInput.current.files[i])
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
            formData.append('longtitue', long)
            for (var pair of formData.entries()){
                console.log(pair);
             }
          }
      
      // axios({
      //   method : 'post',
      //   url : 'http://3.35.27.190/api/hostAdd',
      //   data : formData,
      //   headers : {
      //     Authorization : `Bearer${token}`,
      //     'Content-Type': 'multipart/form-data',
      //       },
      //   })
      //     .then(response=>{
      //   })
      //     .catch(error =>{
      //       console.log(error)
      //   })
      
        // dispatch(setPost(data1, data2))
    }
  }

  export default handleActions(
    {
      [SET_POST]: (state, action) => produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    }, initialState
  );
  
  const actionCreators = {
    setPost,
    addPostDB,
  }
  
  export {actionCreators};