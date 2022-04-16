import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const SET_COMMENT = "SET_COMMENT";

const setComment = createAction(SET_COMMENT, (comment_list) => ({ comment_list }));

const initialState = {
  list: [],
};

const addCommentDB = (comments, postId) => {
  return async function (dispatch, getState) {
    try{
      await axios({
        method: "post",
        url : `/api/commentPost/:${postId}`,
        data: comments,
        headers: {
          // authorization: `Bearer ${token}`,          
        },
      })
      dispatch(setComment());
    } catch (err){
      console.log(err)
    }
 
   
  };
};

export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.comment_list;
      }),
  },
  initialState
);

const actionCreators = {
  setComment,
  addCommentDB,
};

export { actionCreators };
