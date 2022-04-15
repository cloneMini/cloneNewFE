import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const SET_POST = "SET_POST";

const setPost = createAction(SET_POST, (post_list) => ({post_list}));

const initialState = {
    list: [],
  }
  
const addPostDB = () => {
    return function(dispatch, getState){
    let data = 11;
        dispatch(setPost(data))
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